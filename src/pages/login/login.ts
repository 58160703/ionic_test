import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController } from 'ionic-angular';

//เข้ามาในหน้านี้ไม่อยากให้เปิด manubar เลยจะใช้ MenuController เพื่อสั่งมันให้ไม่แสดง

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private menuCtrl: MenuController) { 
    
    this.menuCtrl.enable(false);
    //ปิด enable
     }
  
//ล็อคอินเสร็จแล้วให้ไปที่อื่น 
  login(myForm) {
    console.log(myForm);
  }

}
