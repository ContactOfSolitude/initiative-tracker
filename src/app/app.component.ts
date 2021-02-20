import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Entity } from './interfaces/entity';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  entityListHC: Entity[] = [{ name: "Test", initiative: 22 }, { name: "Test2", initiative: 1 }, { name: "Test3", initiative: 6 }]
  entityList: Entity[] = this.entityListHC


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  deleteEntity(position: number) {
    this.entityList.splice(position, 1)
    console.log(this.entityList)
  }

}