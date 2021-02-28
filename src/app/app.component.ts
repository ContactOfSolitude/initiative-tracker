import { Component, Injectable, OnInit } from '@angular/core';

import { ModalController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Entity } from './interfaces/entity';
import { CreateEntityPage } from './pages/create-entity/create-entity.page';
import { EntityService } from './services/entity.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class AppComponent implements OnInit {
  entityList: Entity[] = []
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public modalController: ModalController,
    public entityService: EntityService
  ) {
    this.initializeApp();
  }

  ngOnInit() {
    this.entityList = this.entityService.getEntityList()
    console.log("ngOnInit")
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  deleteEntity(position: number) {
    this.entityList.splice(position, 1)
    this.entityService.setEntityList(this.entityList)
  }

  async showEntityModal() {
    const modal = await this.modalController.create({
      component: CreateEntityPage
    });
    return await modal.present();
  }

}