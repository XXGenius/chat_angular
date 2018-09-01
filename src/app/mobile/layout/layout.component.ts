import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ApiService} from '../../common/services/api.service';
import {responseMessage} from '../../common/data/messages';
import {EInputType} from '../../common/enums/input-type.enum';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [
    trigger('list', [
      state('in', style({
        opacity: 1,
        transform: 'translateY(50)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateY(50px)'
        }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({
          opacity: 0,
          transform: 'translateY(-50px)'
        }))
      ]),
    ])
  ]
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
    products: '',
    skin_characteristics: '',
    recommendations: '',
    comments: ''
  };

  variantsButton = [];
  currentMessage = 1;
  responseMessage = [];
  allMessage = [];
  allIdProducts = [];
  productsDeal = [];

  typeInput: EInputType = EInputType.text;
  marginChat = '15%';
  srcToImageButton = '/assets/images/btn.png';
  photoUrl = '';

  selectVariant = '';
  fieldToUser = '';
  files: any;
  EInputType = EInputType;

  constructor(private apiService: ApiService) {
    this.apiService.getBitrixToken().subscribe((res) => {
      return res;
    });

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

  getProducts(arr) {
    for (let i = 0; i < arr.length; i++) {
      this.apiService.getProduct(arr[i]).subscribe((res) => {
        this.productsDeal.push({PRODUCT_ID: res['result']['ID'], PRICE: res['result']['PRICE'], QUANTITY: 1});
      });
    }
  }

  unique(arr) {
    const result = [];

    nextInput:
      for (let i = 0; i < arr.length; i++) {
        const str = arr[i]; // для каждого элемента
        for (let j = 0; j < result.length; j++) { // ищем, был ли он уже?
          if (result[j] === str) {
            continue nextInput;
          } // если да, то следующий
        }
        result.push(str);
      }

    return result;
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
          this.apiService.updateContact(this.user).subscribe(result => null);
          this.allMessage.push({text: '', from: 'user', type: 'photo'});
          setTimeout(() => {
            this.response();
          }, 2000);
        });
    }
  }

  back() {  // откат вопроса назад
    this.currentMessage -= 2;
    this.response();
  }

  addToMessage(variant, index) {
    this.variantsButton[index].active = true;
    if (variant.recommendation) {
      this.user.recommendations.push(variant.recommendation);
      if (this.deal.recommendations !== '') {
        this.deal.recommendations = this.deal.recommendations + ', ' + variant.recommendation;
      } else {
        this.deal.recommendations = variant.recommendation;
      }
    }
    if (variant.skin_characteristics) {
      this.user.skin_characteristics.push(variant.skin_characteristics);
      if (this.deal.skin_characteristics !== '') {
        this.deal.skin_characteristics = this.deal.skin_characteristics + ', ' + variant.skin_characteristics;
      } else {
        this.deal.skin_characteristics = variant.skin_characteristics;
      }
    }
    if (variant.product) {
      for (let i = 0; i < variant.product.length; i++) {
        this.allIdProducts.push(variant.product[i]);
      }
    }
    if (this.selectVariant !== '') {
      this.selectVariant = this.selectVariant + ', ' + variant.text;
    } else {
      this.selectVariant = variant.text;
    }
  }

  sendSingleButton(variant) {
    if (variant.recommendation) {
      this.user.recommendations.push(variant.recommendation);
      if (this.deal.recommendations !== '') {
        this.deal.recommendations = this.deal.recommendations + ', ' + variant.recommendation;
      } else {
        this.deal.recommendations = variant.recommendation;
      }
    }
    if (variant.skin_characteristics) {
      this.user.skin_characteristics.push(variant.skin_characteristics);
      if (this.deal.skin_characteristics !== '') {
        this.deal.skin_characteristics = this.deal.skin_characteristics + ', ' + variant.skin_characteristics;
      } else {
        this.deal.skin_characteristics = variant.skin_characteristics;
      }
    }
    if (variant.product) {
      for (let i = 0; i < variant.product.length; i++) {
        this.allIdProducts.push(variant.product[i]);

      }
    }
    if (variant.hasOwnProperty('additional')) {
      if (!variant.additional) {
        this.currentMessage += 1;
      }
    }
    this.sendMessage(variant.text);
  }

  sendMessage(text) {
    this.variantsButton = [];
    this.user[this.fieldToUser] = text;
    if (this.currentMessage === 4) {
      this.apiService.addContact(this.user).subscribe(result => null);
    }
    this.allMessage.push({text: text, from: 'user', type: 'text'});
    setTimeout(() => {
      this.response();
    }, 1000);
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
      this.apiService.updateContact(this.user).subscribe(res => null);
      const products = this.unique(this.allIdProducts);
      this.getProducts(products);
      this.apiService.addDeal(this.deal, this.productsDeal).subscribe(res => null);
      const text = 'Спасибо! Я подберу для Вас индивидуальную систему ухода и в течение 24 часов вышлю информацию в ' +
        'WhatsApp или на электронную почту! Хорошего дня! ;)';
      this.typeInput = EInputType.Good;
      this.allMessage.push({text: text, from: 'bot', type: 'text'});
      this.scrollToBottom();
    }
  }

  changeTypeInput(currentResponseMessage) {
    if (this.typeInput === EInputType.single_button) {
      this.variantsButton = currentResponseMessage.variants;
      this.marginChat = '74%';
    } else if (this.typeInput === EInputType.multi_button) {
      this.variantsButton = currentResponseMessage.variants;
      this.marginChat = '0%';
    } else if (this.typeInput === EInputType.file) {
      this.marginChat = '0%';
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
