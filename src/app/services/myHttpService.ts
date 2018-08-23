import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/internal/operators';


@Injectable()
export class MyHttpService {

  API_URL = 'https://golaso.io/tools/chat/';

  _options = new HttpHeaders({
    'Content-Type':  'application/json'
  });


  constructor(private http: HttpClient) {
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
        map((res) => {
          console.log(res);
        }));

  }

}
