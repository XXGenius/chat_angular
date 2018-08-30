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
  grant_type = 'refresh_token';
  client_id = 'local.5b83e4a58542f0.75374089';
  client_secret = 'UiKnhsSgIidjOBu5BGrwFb9yxApJwXpEX6wlPQLkkJpgPXRdFz';

  user_id = '';

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
    return this.http.get('https://oauth.bitrix.info/oauth/token/?grant_type=' + this.grant_type
      + '&client_id=' + this.client_id
      + '&client_secret=' + this.client_secret +
      '&refresh_token=' + this.REFRESH_TOKEN, {headers: headers})
      .pipe(
        map((res: any) => {
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

  sendBitrix(data) {
    return this.http.post(this.API_URL + 'bitrix.php', data, {headers: this._options})
      .pipe(
        map((res: Object) => {
          return res;
        }));

  }

  addDeal(deal) {
    const data = {
      fields:
        {
          TITLE: 'Плановая продажа',
          TYPE_ID: 'GOODS',
          STAGE_ID: 'NEW',
          COMPANY_ID: 3,
          CONTACT_ID: 3,
          OPENED: 'Y',
          ASSIGNED_BY_ID: 1,
          PROBABILITY: 30,
          CURRENCY_ID: 'USD',
          OPPORTUNITY: 5000,
          // BEGINDATE: date2str(current),
          // CLOSEDATE: date2str(nextMonth)
        },
      params: {REGISTER_SONET_EVENT: 'Y'}
    };
    return this.http.post(this.BITRIX_URL + 'crm.deal.add?scope=&auth=' + this.AUTH_TOKEN, data, {headers: this._options})
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
          ASSIGNED_BY_ID: 1,
          TYPE_ID: 'CLIENT',
          SOURCE_ID: 'SELF',
          PHONE: [{VALUE: user.number, VALUE_TYPE: 'WORK'}],
          UF_CRM_1535643245: '', // список рекомендаций
          UF_CRM_1535643591: '',  // Характеристики кожи
          UF_CRM_5B7E80547875C: user.photo, // фото
          UF_CRM_1534502850878: '23'  // возраст
        }
    };
    return this.http.post(this.BITRIX_URL + 'crm.contact.add?scope=&auth=' + this.AUTH_TOKEN, data, {headers: this._options})
      .pipe(
        map((res) => {
          return res;
        }));
  }

}
