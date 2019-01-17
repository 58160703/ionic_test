//Logic Part

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  company: string = 'A-Host Company';
  Products: string = 'A';
  showing: boolean = false;
    
  constructor(public navCtrl: NavController) { 
    
  }
  openContact() {
    //ถ้าจะส่ง ข้อมูลเพิ่มให้ , เพิ่ม object ด้านใน 
    this.navCtrl.push(ContactPage, {
      companyName: this.company,  //ส่งข้อมูลไปด้วย 2 ตัว
      companyWebsite: 'http://A-host.co.th' //เรียกแบบนี้ว่าการ pass ข้อมูล  หน้า contact ก็รับข้อมูล
    });     
  }
}
