//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/Observable/throw';


//import { Item } from '../model/item';
import { Course } from '../model/course'; 
 
@Injectable()
export class CoursesProvider {

    apiURL : string = 'https://codingthailand.com'

    constructor(public http: Http) { }
    
  
    // getCourses(){ 
    //     return this.http.get(`${this.apiURL}/api/get_courses.php`).map((res: Response) => res.json()).catch(this.handleError);

    // }

    getCourses():Observable <Course[]> {
        return this.http.get(`${this.apiURL}/api/get_courses.php`).map((res: Response) => <Course[]>res.json()).catch(this.handleError);

    }

    getCourseDetail(id : number){ 
        return this.http.get(`${this.apiURL}/api/get_course_detail.php?course_id=${id}`).map((res: Response) => res.json()).catch(this.handleError); //ไม่ต้องมีวงเล็บข้างหลังหรอ

    }

    private handleError(error : any) {
        return Observable.throw(error.json() || 'เกิดข้อผิดพลาดจาก server');
    }

}

//ใส่ค่าให้ return ออกมาเป็น observtable  ต้อง import library มาด้วย มาจาก rxgx
      //ใส่ค่าไทป์เข้าไปด้วย return ออกมาเป็น array item 

//this.http ตัวนี้ใช้ดึงข้อมูล
// .map เพื่อจะได้ return ของมูลที่ Response ได้ส่งกลับไปยังที่มันส่งได้
// map((res : Response)=>res.json ) ตัวที่ map res ไทป์เป็น Response return ตัว  res ที่รัยมาด้วย res.json 

//จริงๆ คือไม่ต้อง force เป็น array ก็ได้เพราะข้อมูลที่เขาส่งมาก็เป็น json อยู่แล้ว

