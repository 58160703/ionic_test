import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
 
import { CoursesProvider } from '../../providers/courses-service';
// import { Item } from '../../model/item';
import { Course } from '../../model/course';
import { Subscription } from 'rxjs/Subscription';  

 import { YoutubePage } from '../youtube/youtube';



@IonicPage()
@Component({
  selector: 'page-coursedetail',
  templateUrl: 'coursedetail.html',
})

  
export class CoursedetailPage {
  id: number;
  cDetail: string;
  data: any;
  title: any;
  items: Course[];
  sub: Subscription;
  errorMessage: string;

  constructor(private coursesService: CoursesProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl:ModalController
  ) {
    this.id = this.navParams.get('id');
    this.title = this.navParams.get('title');
    console.log(this.id);
    console.log(this.title);
    // this.data = this.navParams.data;
    // this.title = this.data.c_title;
    // console.log(this.data);
    
    
  }

  ionViewWillEnter() {
    this.getCourseDetail(); 
  }

  ionViewWillLeave() {
    this.sub.unsubscribe();
  }

  private getCourseDetail() {
    this.sub = this.coursesService.getCourseDetail(this.id).subscribe(
      (res) => this.items = res,
      (error) => this.errorMessage = <any>error,
      () => console.log('complete')
    );
  }
  private itemSelected(c): void {
    console.log(c)
    // this.navCtrl.push(YoutubePage, { ch_title: c.ch_title, ch_url: c.ch_url });    จะเปลี่ยนให้เป็น pop up ขึ้นมา
    const youtubeModal = this.modalCtrl.create(YoutubePage,
      {
        ch_title: c.ch_title,
        ch_url: c.ch_url
      });
    youtubeModal.present();
    
  }

 
}
  


