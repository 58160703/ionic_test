import { Injectable } from '@angular/core';

import { Http,Response,Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/Observable/throw';

import { FeedBack } from '../../model/feedback'

@Injectable()
export class AuthServiceProvider {
  apiUrl: string = 'https://codingthailand.com';

  constructor(public http: Http) { }
  
  public signup(fullname: string, email: string, password: string): Observable<FeedBack> {
    //รับข้อมูลมา 3 ตัวแล้วเดี่ยวส่งให้  backend ใช้ แล้ว return feedback กลับมา
    let myHeader = new Headers();
    //ประกาศตัวแปร สำหรับ Header
    
    myHeader.append('Content-Type', 'application/json');
    let option = new RequestOptions({ headers: myHeader });
    let body = {
      'fullname': fullname,
      'email': email,
      'password': password
    }; //ชุดนี้จะส่งให้ backend

    return this.http.post(`${this.apiUrl}/api/insert_user.php`, body, option)
      .map((res: Response) => <FeedBack[]>res.json()).catch(this.handleError);
    //post ไป 3อย่าง อันแรกเป็น URL ที่เราจะไป ตัวที่ 2 body จะเป็นการบอกว่าเราส่ง body อะไร ไป ส่งข้อมูลอะไรไป ตัวที่ 3 เป็น headers ต้อง import เข้ามาก่อนแล้วประกาศค่า ให้เก็บ
    // res: Response กลับมาเป็น res.json() เก็บใน FeedBack[] ส่งกลับไป
  }

  public signup2(email: string, password: string): Observable<boolean> {
    //เอาไว้ใช้เชื่อมกับ auth0 
    let myHeader = new Headers();
    myHeader.append('Content-Type', 'application/json');
    let option = new RequestOptions({ headers: myHeader });
    
    let body = {
  
      'client_id': '0OVVUjO3zMqomiwMPsT5x8TCtilYjFDQ',
      'email': email,
      'password': password,
      'connection': 'Username-Password-Authentication'

    }; 

    return this.http.post(`https://warintorn.auth0.com/dbconnections/signup`, body,option)
      .map((res: Response) => {
        let feedback = res.json();
        if (feedback) {
          return true;
        } else {
          return false;
        }
      }).catch(this.handleError2);
  }

  private handleError(error : any) {
    return Observable.throw(error.json() || 'เกิดข้อผิดพลาดจาก server');
  }
  private handleError2(error: any) {
  return Observable.throw(error.json().description || 'เกิดข้อผิดพลาดจาก Server');
}
}
