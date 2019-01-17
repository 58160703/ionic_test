import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';

//class ไหนจะใช้ service อย่าลืม import ด้วย
import { CoursesProvider } from '../../providers/courses-service';
//เอาโมเดลมาดhวย
//import { Item } from '../../model/item';
import { Course } from '../../model/course';

//เวลาเรียกใช้งานservice ต้อง inject ด้วย courses service เข้ามาใน constructor 

import { Subscription } from 'rxjs/Subscription';  //ควรทำไม่ใช่ก็คืนข้อมูลเพื่อ performance 
import { CoursedetailPage } from '../coursedetail/coursedetail';
import { e } from '@angular/core/src/render3';


@IonicPage()
@Component({
  selector: 'page-courses',
  templateUrl: 'courses.html',
})
export class CoursesPage {
  courses: Course[];
 
  sub: Subscription;
  errorMessage: string;  //เก็บ error จากฝั่ง backend

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private cService: CoursesProvider, private loadingCtrl: LoadingController) {
  //subsribe เพื่อเอาข้อมูลมาใช้ 
  }

  ionViewWillEnter() {
    this.getCourse();
  }
  ionViewWillLeave() {
    this.sub.unsubscribe(); //พอเรากลับมันก็จะคืนข้อมูล
  }
  private getCourse() {
    let loading = this.loadingCtrl.create({  //ให้มันโหลด
      content: 'Please wait...',
      spinner : 'dots'
    });
  
    loading.present();
  

    this.sub = this.cService.getCourses().subscribe(
      (res) => this.courses = res,
      (error) => {
        this.errorMessage = <any>error,
        loading.dismiss()
      },
      () => loading.dismiss() //โหลดเสร็จให้หน้าโหลดหาย
    );
    //ด้านใน subscribe res ตัวหลังคือมาจาก backend มาใส่ใน this.courses res หน้าหลัง ต้องชื่อเดียวกัน 
  }
  private itemSelected(c) {
    console.log(c);
    this.navCtrl.push(CoursedetailPage,{id:c.id,title:c.c_title});
    // this.navCtrl.push(CoursedetailPage,{'id':c.id,'title':c.c_title});
  }
 
  getItems(ev: any) {
    // set val to the value of the searchbar
    const val = ev.target.value; //ดังของมูลได้เลย

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.courses = this.courses.filter((course : Course) => { //ฟิลเตอร์ด้วย courses ของโมเดล
        return (course.c_detail.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      return this.getCourse();
    }
  }

}
