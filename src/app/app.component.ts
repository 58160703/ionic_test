import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

//import { Page1 } from '../pages/page1/page1';

import { TabPage } from '../pages/tab/tab';
import { MapPage } from '../pages/map/map';
import { PageTwoPage } from '../pages/page-two/page-two';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { CoursesPage } from '../pages/courses/courses';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  //rootPage: any = Page1;
  rootPage: any = TabPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'หน้าหลัก', component: TabPage },
      { title: 'หน้าสอง', component: PageTwoPage },
      { title: 'เกี่ยวกับฉัน', component: AboutPage },
      { title: 'ติดต่อฉัน', component: ContactPage },
      { title: 'แผนที่', component: MapPage },
      { title: 'คอส', component: CoursesPage }
    
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
