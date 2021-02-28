import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AppComponent } from 'src/app/app.component';
import { Entity } from 'src/app/interfaces/entity';

@Component({
  selector: 'app-create-entity',
  templateUrl: './create-entity.page.html',
  styleUrls: ['./create-entity.page.scss'],
})
export class CreateEntityPage implements OnInit {
  entity: Entity = { name: "Test", initiative: 22 }
  
  constructor(public appComponent: AppComponent,
    public modalCtrl: ModalController) { }

  ngOnInit() { }

  saveEntity() {
    this.appComponent.setEntityList(this.entity)
  }

  dismissModal() {
    this.saveEntity()
    this.modalCtrl.dismiss();
  }

}
