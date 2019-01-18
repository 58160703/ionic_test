import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PageTwoPage } from '../pages/page-two/page-two';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { TabPage } from '../pages/tab/tab';
import { MapPage } from '../pages/map/map';
import { CoursesPage } from '../pages/courses/courses'
import { CoursedetailPage } from '../pages/coursedetail/coursedetail';
import { YoutubePage } from '../pages/youtube/youtube';
import { NewsPage } from '../pages/news/news';
import { SignupPage } from '../pages/signup/signup';
import { Signup2Page } from '../pages/signup2/signup2';
import { LoginPage } from '../pages/login/login';

import { CoursesProvider } from '../providers/courses-service';
import { NewsServiceProvider } from '../providers/news-service/news-service';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
 
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PageTwoPage,
    AboutPage,
    ContactPage,
    TabPage,
    MapPage,
    CoursesPage,
    CoursedetailPage,
    YoutubePage,
    NewsPage,
    SignupPage,
    Signup2Page,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PageTwoPage,
    AboutPage,
    ContactPage,
    TabPage,
    MapPage,
    CoursesPage,
    CoursedetailPage,
    YoutubePage,
    NewsPage,
    SignupPage,
    Signup2Page,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CoursesProvider,
    NewsServiceProvider,
    AuthServiceProvider
  ]
})
export class AppModule {}
