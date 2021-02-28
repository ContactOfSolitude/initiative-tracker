import { Injectable } from '@angular/core';
import { Entity } from '../interfaces/entity';

@Injectable({
  providedIn: 'root'
})
export class EntityService {
  entityList: Entity[] = []

  constructor() { }

  setEntity(value: Entity) {
    this.entityList.push(value);
  }

  setEntityList(value: Entity[]) {
    this.entityList = value
  }

  getEntityList() {
    return this.entityList
  }

}
