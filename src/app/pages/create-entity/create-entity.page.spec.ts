import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateEntityPage } from './create-entity.page';

describe('CreateEntityPage', () => {
  let component: CreateEntityPage;
  let fixture: ComponentFixture<CreateEntityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEntityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateEntityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
