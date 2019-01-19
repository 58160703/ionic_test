import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  cName: string;
  //cWebsite: string;
  cWebsite: string = 'https://pantip.com/topic/30574714';
  cPhone: String;
  constructor(private storage : Storage,public navCtrl: NavController, public navParams: NavParams) {  //รับข้อมูลด้วย navParams 
    // this.cName = this.navParams.get('companyName');
    // this.cWebsite = this.navParams.get('companyWebsite');  //และนำข้อมูลพวกนี้ไปแสดงที่เว็บไซต์
    // // เป็นการ binding

 

  }

  ionViewWillEnter() {
    this.storage.ready().then(() => {
      this.storage.get('company').then((company) => {
        this.cName = company; //cName = company ที่เรารับมา  
      });
      this.storage.get('phone').then((phone) => {
        this.cPhone = phone; //cName = company ที่เรารับมา  
      });
    })
    
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

}
