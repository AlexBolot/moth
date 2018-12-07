import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTimeLeftComponent } from './card-time-left.component';

describe('CardTimeLeftComponent', () => {
  let component: CardTimeLeftComponent;
  let fixture: ComponentFixture<CardTimeLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardTimeLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTimeLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
