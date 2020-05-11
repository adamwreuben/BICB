import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrasuryComponent } from './trasury.component';

describe('TrasuryComponent', () => {
  let component: TrasuryComponent;
  let fixture: ComponentFixture<TrasuryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrasuryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrasuryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
