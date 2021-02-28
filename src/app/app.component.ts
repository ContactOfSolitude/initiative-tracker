import { Component, Injectable } from '@angular/core';

import { ModalController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Entity } from './interfaces/entity';
import { CreateEntityPage } from './pages/create-entity/create-entity.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
@Injectable()
export class AppComponent {
  entityList: Entity[] = [{ name: "Test", initiative: 22 }, { name: "Test2", initiative: 1 }, { name: "Test3", initiative: 6 }]

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public modalController: ModalController,
  ) {
    this.initializeApp();
  }

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

  async showEntityModal() {
    const modal = await this.modalController.create({
      component: CreateEntityPage,
    });
    return await modal.present();
  }

}