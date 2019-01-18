import { Component } from '@angular/core';
import { FormGroup,FormBuilder,FormControl, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams,AlertController,LoadingController } from 'ionic-angular';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { FeedBack } from '../../model/feedback';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  myForm: FormGroup;
  fullname: FormControl;
  email: FormControl;
  password: FormControl;
  feedback: FeedBack;
  errorMessage = String;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public fb: FormBuilder,
    private authServiceProvider: AuthServiceProvider,
    private alertCtrl: AlertController,
    private loadingCtrl:LoadingController) {

    
    this.fullname = this.fb.control('',Validators.required); //บอกว่า fullname จำเป็นต้องกรอก
    //this.email = this.fb.control('', Validators.required);
    this.email = this.fb.control('', Validators.compose([Validators.required,SignupPage.emailValidator]));
    //this.password = this.fb.control('',Validators.required);
    //assign ค่าให้ input แต่ละตัวโดยที่อ้างไปที่ชื่อ form
    this.password = this.fb.control('', Validators.compose([Validators.required, Validators.minLength(3)]))
    this.myForm = this.fb.group({
      'fullname': this.fullname,
      'email': this.email,
      'password': this.password
    }); 
    // 'fullname' ชื่อที่ html
  }
  //ตวรจสอบความถูกต้องของอีเมลล์
  static emailValidator(control: FormControl) {
    let email_regxp: any = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email_regxp.test(control.value) ? null : { invalidEmail: true };
    //ส่ง method test ไปเช็คค่าใน control คืนค่า true ถ้าไม่ invalid ถ้า ok ก็ คืน null
  }
  public signup():void {
    console.log(this.myForm.value);
    let fullname = this.myForm.controls['fullname'].value; //เข้าถึง fullname ใน form
    let email = this.myForm.controls['email'].value;
    let password = this.myForm.controls['password'].value;
    //ส่ง3ตัวให้ service ไปใช้ที่ backend
    
    let loader = this.loadingCtrl.create({
      content: 'กำลังบันทึกข้อมูล...'
    });
    loader.present();
    this.authServiceProvider.signup(fullname, email, password).subscribe(
      (res) => {
        this.feedback = res;
        if (this.feedback.status == 'ok') {
          //console.log(this.feedback.message);
          let alert = this.alertCtrl.create({
            title: this.feedback.message,
            buttons: ['ตกลง']
          });
          alert.present();
          this.myForm.reset();
        } else {
         // console.log(this.feedback.message);
          let alert = this.alertCtrl.create({
            title: this.feedback.message,
            buttons: ['ตกลง']
          });
          alert.present();
          this.myForm.reset();
          
        }
      }, error => { 
        this.errorMessage = <any>error,
          //errorMessage เท่ากับ error ในฝั่ง backend catch ไว้ที่ฝั่ง service
          loader.dismiss();
      }, () => {
        loader.dismiss();
      }
    );

  }
}