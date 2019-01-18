//Logic Part

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactPage } from '../contact/contact';
import { SignupPage } from '../signup/signup';
import { Signup2Page } from '../signup2/signup2';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  company: string = 'A-Host Company';
  Products: string = 'A';
  showing: boolean = false;

  slides = [
    {
      title: "Welcome to the Docs!",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "../../assets/imgs/ica-slidebox-img-1.png",
      
    },
    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "../../assets/imgs/ica-slidebox-img-2.png",
    },
    {
      title: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "../../assets/imgs/ica-slidebox-img-3.png",
    }
  ];

    
  constructor(public navCtrl: NavController) {
    
  }
  openContact() {
    //ถ้าจะส่ง ข้อมูลเพิ่มให้ , เพิ่ม object ด้านใน 
    this.navCtrl.push(ContactPage, {
      companyName: this.company,  //ส่งข้อมูลไปด้วย 2 ตัว
      companyWebsite: 'http://A-host.co.th' //เรียกแบบนี้ว่าการ pass ข้อมูล  หน้า contact ก็รับข้อมูล
    });
  }
  openSignup() {
    this.navCtrl.push(SignupPage);
  }
  openSignup2() {
    this.navCtrl.push(Signup2Page);
  }
}
