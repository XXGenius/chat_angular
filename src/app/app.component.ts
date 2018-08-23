import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {responseMessage} from './messages';
import {MyHttpService} from './services/myHttpService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChildren('messages') messages: QueryList<any>;
  @ViewChild('content') content: ElementRef;

  formData: FormData = new FormData();
  Form: FormGroup;

  user = {id: 1};

  variantsButton = [];
  currentMessage = 1;
  responseMessage = [];
  allMessage = [];

  typeInput = 'text';
  marginChat = '15%';
  srcToImageButton = '/assets/images/btn.png';

  selectVariant = '';
  fieldToUser = '';
  files: any;

  constructor(private myHttp: MyHttpService) {
  }

  ngAfterViewInit() {
    this.messages.changes.subscribe(this.scrollToBottom);
  }

  ngOnInit(): void {
    this.responseMessage = responseMessage;
    this.initForm();
    this.response();
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
    console.log(this.files);
    if (this.files) {
      const files: FileList = this.files;
      console.log(files);
      console.log(files[0]);
      this.formData.append('file', files[0]);
      console.log(this.formData);

      console.log(this.formData);
      this.myHttp.sendfile(this.formData)
        .subscribe((res) => {
          this.user['photo'] = 'https://' + res.url;
        });
    }
    this.response();
  }

  sendBitrix() {
    this.myHttp.sendBitrix(this.user)
      .subscribe((res) => {
        console.log(res);
      });
  }

  addToMessage(text, index) {
    this.variantsButton[index].active = true;
    this.selectVariant = this.selectVariant + ', ' + text;
  }

  sendMessage(text) {
    console.log(text);
    this.variantsButton = [];
    this.user[this.fieldToUser] = text;
    this.allMessage.push({text: text, from: 'user'});
    this.response();
  }

  response() {
    if (this.currentMessage <= this.responseMessage.length) {
      this.marginChat = '15%';
      const currentResponseMessage = this.responseMessage[this.currentMessage - 1];
      const text = currentResponseMessage.text;
      this.fieldToUser = currentResponseMessage.field;
      this.typeInput = currentResponseMessage.type;
      this.currentMessage += 1;
      this.allMessage.push({text: text, from: 'bot'});
      this.scrollToBottom();
      this.changeTypeInput(currentResponseMessage);
    } else {
      const text = 'Ваша заявка отправлена на рассмотрение';
      this.typeInput = 'Good';
      this.allMessage.push({text: text, from: 'bot'});
      this.scrollToBottom();
      this.sendBitrix();
    }
  }

  changeTypeInput(currentResponseMessage) {
    if (this.typeInput === 'single_button') {
      this.variantsButton = currentResponseMessage.variants;
      this.marginChat = '40%';
      console.log(this.variantsButton);
    } else if (this.typeInput === 'multi_button') {
      this.variantsButton = currentResponseMessage.variants;
      console.log(this.variantsButton);
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
