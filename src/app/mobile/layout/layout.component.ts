import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ApiService} from '../../common/services/api.service';
import {responseMessage} from '../../common/data/messages';
import {EInputType} from '../../common/enums/input-type.enum';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, AfterViewInit {

  @ViewChildren('messages') messages: QueryList<any>;
  @ViewChild('content') content: ElementRef;

  formData: FormData = new FormData();
  Form: FormGroup;

  user = {
    id: 1,
    photo: {},
    skin_characteristics: [],
    recommendations: []
  };

  deal = {
    products: [],
    comments: []
  };

  variantsButton = [];
  currentMessage = 1;
  responseMessage = [];
  allMessage = [];

  typeInput: EInputType = EInputType.text;
  marginChat = '15%';
  srcToImageButton = '/assets/images/btn.png';
  photoUrl = '';

  selectVariant = '';
  fieldToUser = '';
  files: any;
  EInputType = EInputType;

  constructor(private apiService: ApiService) {
    this.apiService.getBitrixToken().subscribe(res => console.log(res));
  }

  ngAfterViewInit() {
    this.messages.changes.subscribe(this.scrollToBottom);
  }

  ngOnInit(): void {
    this.responseMessage = responseMessage;
    this.initForm();
    this.response();
    setTimeout(() => {
      this.response();
    }, 500);
  }

  scrollToBottom = () => {
    try {
      this.content.nativeElement.scrollTop = this.content.nativeElement.scrollHeight;
    } catch (err) {
    }
  }

  initForm() {
    this.Form = new FormGroup({
      text: new FormControl(''),
    });
  }

  addPhoto(event) {
    const target = event.target || event.srcElement;
    this.files = target.files;
    if (this.files) {
      const files: FileList = this.files;
      this.formData.append('file', files[0]);
      this.apiService.sendfile(this.formData)
        .subscribe((res) => {
          this.photoUrl = 'https://' + res.url;
          this.user.photo = 'https://' + res.url;
          console.log(this.user);
          this.apiService.addContact(this.user).subscribe(result => console.log(result));
          this.allMessage.push({text: '', from: 'user', type: 'photo'});
          this.response();
        });
    }
  }

  sendBitrix() {
    this.apiService.sendBitrix(this.user)
      .subscribe((res) => {
        alert(res);
      });
  }

  addToMessage(variant, index) {
    this.variantsButton[index].active = true;
    if (variant.product) {
      this.deal.products.push(variant.product);
    }
    console.log(this.deal);
    this.selectVariant = this.selectVariant + ', ' + variant.text;
  }

  sendSingleButton(variant) {
    console.log(variant);
    if (variant.recommendation) {
      this.user.recommendations.push(variant.recommendation);
    }
    if (variant.skin_characteristics) {
      this.user.skin_characteristics.push(variant.skin_characteristics);
    }
    if (variant.product) {
      this.deal.products.push(variant.product);
    }
    console.log(this.user);
    this.sendMessage(variant.text);
  }

  sendMessage(text) {
    this.variantsButton = [];
    this.user[this.fieldToUser] = text;
    this.allMessage.push({text: text, from: 'user', type: 'text'});
    this.response();
  }

  response() {
    if (this.currentMessage <= this.responseMessage.length) {
      this.marginChat = '15%';
      const currentResponseMessage = this.responseMessage[this.currentMessage - 1];
      const text = currentResponseMessage.text;
      this.fieldToUser = currentResponseMessage.field;
      this.typeInput = EInputType[currentResponseMessage.type as string];
      this.currentMessage += 1;
      this.allMessage.push({text: text, from: 'bot'});
      this.scrollToBottom();
      this.changeTypeInput(currentResponseMessage);
    } else {
      const text = 'Ваша заявка отправлена на рассмотрение';
      this.typeInput = EInputType.Good;
      this.allMessage.push({text: text, from: 'bot', type: 'text'});
      this.scrollToBottom();
      this.sendBitrix();
    }
  }

  changeTypeInput(currentResponseMessage) {
    if (this.typeInput === EInputType.single_button) {
      this.variantsButton = currentResponseMessage.variants;
      this.marginChat = '40%';
    } else if (this.typeInput === EInputType.multi_button) {
      this.variantsButton = currentResponseMessage.variants;
    }
  }

  onSubmit() {
    const controls = this.Form.controls;
    const text = this.Form.value.text;
    if (this.Form.invalid) {
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());
      return;
    }
    this.sendMessage(text);
    this.Form.reset();
  }
}
