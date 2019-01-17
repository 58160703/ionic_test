import { Injectable } from '@angular/core';

import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/Observable/throw';

import { News } from '../../model/news';
@Injectable()
export class NewsServiceProvider {
  apiUrl: string=`https://newsapi.org/v2/top-headlines?sources=${this.source}&apiKey=${this.apiKey}` ;
  apiKey: string='0b9d67ed58074934814fbbd96c0b44c1';
  source: string ='cnn';
  constructor(public http: Http) {
    console.log('Hello NewsServiceProvider Provider');
  }
  getCourses():Observable <News[]> {
    return this.http.get(`${this.apiUrl}`).map((res: Response) => <News[]>res.json()).catch(this.handleError);

  }
  private handleError(error : any) {
    return Observable.throw(error.json() || 'เกิดข้อผิดพลาดจาก server');
}
}
