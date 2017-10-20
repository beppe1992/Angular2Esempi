import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RicercaSaleComponent } from './ricerca-sale.component';

describe('RicercaSaleComponent', () => {
  let component: RicercaSaleComponent;
  let fixture: ComponentFixture<RicercaSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RicercaSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RicercaSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
