import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//For Tab
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

@IonicPage()
@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html',
})
export class TabPage {
  home = HomePage;
  about = AboutPage;
  contact = ContactPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabPage');
  }

}
