import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRessourceManagerComponent } from './card-ressource-manager.component';

describe('CardRessourceManagerComponent', () => {
  let component: CardRessourceManagerComponent;
  let fixture: ComponentFixture<CardRessourceManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardRessourceManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRessourceManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
