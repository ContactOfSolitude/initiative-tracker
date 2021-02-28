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
  entity: Entity = { name: '', initiative: '' }
  entityList: Entity[] = []

  constructor(public entityService: EntityService,
    public modalCtrl: ModalController) { }

  ngOnInit() {
    this.entityList = this.entityService.getEntityList()
  }

  saveEntity() {
    if (this.entity.name != '' && this.entity.initiative != '') {
      this.entityList.push(this.entity)
      this.entityList.sort((a, b) => parseFloat(b.initiative) - parseFloat(a.initiative));
      this.entityService.setEntityList(this.entityList)
/*       this.entity.name = ''
      this.entity.initiative = '' */
      this.modalCtrl.dismiss();
    } else { }

  }

  cancel() {
    this.modalCtrl.dismiss();
  }

  changeName(event: any) {
    this.entity.name = event.target.value
  }

  changeInitiative(event: any) {
    this.entity.initiative = event.target.value
  }

}
