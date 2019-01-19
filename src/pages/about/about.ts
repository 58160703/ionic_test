import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
//ลองใช้งาน storage แบบ key value

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage
  ) {
    
  }
  ionViewWillEnter() {
    //เช็คว่า platform ใช้ได้หรือเปล่า(ready?) ใช้ได้ค่อย setup
    this.storage.ready().then(() => {
      this.storage.set('company', 'A-Host');//app รันปุ๊ปมันจะเก็บเลย
      this.storage.set('phone', '0851470376');
    });//เป็นแบบ promiss
}

}


  

