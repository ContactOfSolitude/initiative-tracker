import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Entity } from 'src/app/interfaces/entity';
import { EntityService } from 'src/app/services/entity.service';

@Component({
  selector: 'app-create-entity',
  templateUrl: './create-entity.page.html',
  styleUrls: ['./create-entity.page.scss'],
})
export class CreateEntityPage implements OnInit {
  entity: Entity = { name: "Test", initiative: 22 }

  constructor(public entityService: EntityService,
    public modalCtrl: ModalController) { }

  ngOnInit() { }

  saveEntity() {
    this.entityService.setEntity(this.entity)
  }

  dismissModal() {
    this.saveEntity()
    this.modalCtrl.dismiss();
  }

}
