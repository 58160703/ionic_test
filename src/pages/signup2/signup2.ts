import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,LoadingController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';


import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-signup2',
  templateUrl: 'signup2.html',
})
export class Signup2Page {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private authService: AuthServiceProvider,
    private loadingCtrl: LoadingController,
    private alertCtrl:AlertController) {
    
  }
  public signup2(myForm) : void {
    //console.log(myForm);
    let email = myForm.email;
    let password = myForm.password;

    let loader = this.loadingCtrl.create({
      content: 'กำลังบันทึกข้อมูล...' 
     });
     loader.present();
 

    this.authService.signup2(email,password).subscribe(
      (res) => {
        let feedback:boolean = res;
        if (feedback === true) {
          console.log('Signup Success'); 
          //ถ้าสมัครแล้วให้เข้าไปหน้าล็อคอินให้เลย
          //this.navCtrl.push(LoginPage);
          this.navCtrl.setRoot(LoginPage);
          //ไม่อยากให้ user ย้อนกลับไปหน้า home เลยให้ set หน้า root เป็น login เลย
        } else {
          console.log('Signup Fail');        
        }
      }, error => { 
        let errorMessage = <any>error //ใช้แค่ แค่ในนี้ ก็ประกาศแค่ let 
        let alert = this.alertCtrl.create({
          title: errorMessage,
          buttons: ['ตกลง']
        });
        alert.present();
        loader.dismiss();
      }, () => {
        loader.dismiss();
      }
    );
  }



}
