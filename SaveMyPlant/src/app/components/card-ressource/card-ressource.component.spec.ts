import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRessourceComponent } from './card-ressource.component';

describe('CardRessourceComponent', () => {
  let component: CardRessourceComponent;
  let fixture: ComponentFixture<CardRessourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardRessourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRessourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
