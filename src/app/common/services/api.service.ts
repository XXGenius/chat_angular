import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/internal/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  BITRIX_URL = 'https://b24-nafnqn.bitrix24.ru/rest/';
  API_URL = 'https://golaso.io/tools/chat/';

  AUTH_TOKEN = 'c981845b002b73d0002ae60e00000015000003b45e947d38bf58956b571ee0b0b95e33';

  REFRESH_TOKEN = 'a100ac5b002b73d0002ae60e000000150000038bccb014ab23bf391715542a9480dca8';

  user_id = '';
  deal_id = '';

  _options = new HttpHeaders({
    'Content-Type': 'application/json'
  });


  constructor(private http: HttpClient) {
    if (localStorage.getItem('refresh_token')) {
      this.REFRESH_TOKEN = localStorage.getItem('refresh_token');
    }
    this.getBitrixToken();
  }

  getBitrixToken() {
    const headers = new HttpHeaders();
    headers.set('Content-Type', null);
    headers.set('Accept', 'multipart/form-data');
    return this.http.get('https://golaso.io/tools/chat/getToken.php' +
      '?token=' + this.REFRESH_TOKEN, {headers: headers})
      .pipe(
        map((res: any) => {
          res = JSON.parse(res);
          this.AUTH_TOKEN = res.access_token;
          this.REFRESH_TOKEN = res.refresh_token;
          localStorage.setItem('refresh_token', res.refresh_token);
        }));
  }

  sendfile(data) {
    const headers = new HttpHeaders();
    headers.set('Content-Type', null);
    headers.set('Accept', 'multipart/form-data');
    return this.http.post(this.API_URL + 'upload.php', data, {headers: headers})
      .pipe(
        map((res: any) => {
          return res;
        }));
  }

  addDeal(deal, products) {
    const data = {
      fields:
        {
          TITLE: 'Плановая продажа',
          TYPE_ID: 'GOODS',
          STAGE_ID: 'NEW',
          COMPANY_ID: 5,
          CONTACT_ID: this.user_id,
          OPENED: 'Y',
          ASSIGNED_BY_ID: 1,
          PROBABILITY: 30,
          CURRENCY_ID: 'RUB',
          OPPORTUNITY: 0,
          UF_CRM_1535717661: deal.skin_characteristics, // Характеристики кожи
          UF_CRM_1535717670: deal.recommendations, // Список рекомендаций
          UF_CRM_1535717680: deal.products, // Средства
        },
      params: {REGISTER_SONET_EVENT: 'Y'}
    };
    return this.http.post(this.BITRIX_URL + 'crm.deal.add?scope=&auth=' + this.AUTH_TOKEN, data, {headers: this._options})
      .pipe(
        map((res) => {
          this.deal_id = res['result'];
          this.addProduct(products).subscribe(result => null);
          return res;
        }));
  }

  updateContact(user) {
    const data = {
      id: this.user_id,
      fields:
        {
          NAME: user.name,
          LAST_NAME: '',
          OPENED: 'Y',
          TYPE_ID: 'CLIENT',
          SOURCE_ID: 'SELF',
          UF_CRM_1535731326: user.email,
          PHONE: [{VALUE: user.number, VALUE_TYPE: 'WORK'}],

          UF_CRM_1535654556: user.photo, // фото
          UF_CRM_1535731528: user.age  // возраст
        }
    };
    return this.http.post(this.BITRIX_URL + 'crm.contact.update?scope=&auth=' + this.AUTH_TOKEN, data, {headers: this._options})
      .pipe(
        map((res) => {
          return res;
        }));
  }

  getProduct(id) {
    const data = {
      id: id,
    };
    return this.http.post(this.BITRIX_URL + 'crm.product.get?scope=&auth=' + this.AUTH_TOKEN, data, {headers: this._options})
      .pipe(
        map((res) => {
          return res;
        }));
  }

  addProduct(products) {
    const data = {
      id: this.deal_id,
      rows: products
    };
    return this.http.post(this.BITRIX_URL + 'crm.deal.productrows.set?scope=&auth=' + this.AUTH_TOKEN, data, {headers: this._options})
      .pipe(
        map((res) => {
          return res;
        }));
  }

  addContact(user) {
    const data = {
      fields:
        {
          NAME: user.name,
          LAST_NAME: '',
          OPENED: 'Y',
          TYPE_ID: 'CLIENT',
          SOURCE_ID: 'SELF',
          PHONE: [{VALUE: user.number, VALUE_TYPE: 'WORK'}],
          UF_CRM_1535643245: '', // список рекомендаций
          UF_CRM_1535643591: '',  // Характеристики кожи
          UF_CRM_1535654556: user.photo, // фото
          UF_CRM_1535731528: ''  // возраст
        }
    };
    return this.http.post(this.BITRIX_URL + 'crm.contact.add?scope=&auth=' + this.AUTH_TOKEN, data, {headers: this._options})
      .pipe(
        map((res) => {
          this.user_id = res['result'];
          return res;
        }));
  }

}
