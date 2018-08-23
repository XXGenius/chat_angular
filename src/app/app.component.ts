import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
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

  typeInput = 'text';

  marginChat = '15%';

  variantsButton = [];

  currentMessage = 1;

  responseMessage = [];

  allMessage = [];

  selectVariant = '';

  fieldToUser = '';

  myFirstReactiveForm: FormGroup;

  files: any;

  srcToImageButton = '/assets/images/btn.png';

  user = {id: 1};

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
    this.myFirstReactiveForm = new FormGroup({});
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
          console.log(res);
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
    this.selectVariant = this.selectVariant + ',' + text;
    console.log(this.selectVariant);
  }

  sendMessage(text) {
    console.log(text);
    this.variantsButton = [];
    this.user[this.fieldToUser] = text;
    this.allMessage.push({text: text, from: 'user'});
    this.response();
    console.log(this.user);
  }

  response() {
    if (this.currentMessage <= this.responseMessage.length) {
      this.marginChat = '15%';
      const responseMessageNew = this.responseMessage[this.currentMessage - 1];
      const text = responseMessageNew.text;
      this.fieldToUser = responseMessageNew.field;
      this.typeInput = responseMessageNew.type;
      this.allMessage.push({text: text, from: 'bot'});
      this.currentMessage += 1;
      this.scrollToBottom();
      if (this.typeInput === 'single_button') {
        this.variantsButton = responseMessageNew.variants;
        this.marginChat = '40%';
        console.log(this.variantsButton);
      } else if (this.typeInput === 'multi_button') {
        this.variantsButton = responseMessageNew.variants;
        console.log(this.variantsButton);
      }
    } else {
      const text = 'Ваша заявка отправлена на рассмотрение';
      this.typeInput = 'Good';
      this.allMessage.push({text: text, from: 'bot'});
      this.scrollToBottom();
      this.sendBitrix();
    }
  }

  onSubmit() {
    const controls = this.myFirstReactiveForm.controls;
    const text = this.myFirstReactiveForm.value.text;
    if (this.myFirstReactiveForm.invalid) {
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());
      return;
    }
    this.sendMessage(text);
    this.myFirstReactiveForm.reset();

  }


}
