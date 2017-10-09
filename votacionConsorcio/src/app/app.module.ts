import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// import { AboutPage } from '../pages/about/about';
// import { ContactPage } from '../pages/contact/contact';
// import { HomePage } from '../pages/home/home';
// import { TabsPage } from '../pages/tabs/tabs';
import { VotacionPage } from '../pages/votacion/votacion';
import { TipoVotacionPage } from '../pages/tipo-votacion/tipo-votacion';
import { LoginPage } from '../pages/login/login';
import { ResultadosPage } from '../pages/resultados/resultados';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { VotacionProvider } from '../providers/votacion/votacion';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { CONFIG } from './firebase';

import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';



@NgModule({
  declarations: [
    MyApp,
    // AboutPage,
    // ContactPage,
    // HomePage,
    // TabsPage
    LoginPage,
    VotacionPage,
    TipoVotacionPage,
    ResultadosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(CONFIG),
    AngularFireDatabaseModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // AboutPage,
    // ContactPage,
    // HomePage,
    // TabsPage
    LoginPage,
    VotacionPage,
    TipoVotacionPage,
    ResultadosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    VotacionProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
