import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDeskComponent } from './service-desk.component';

describe('ServiceDeskComponent', () => {
  let component: ServiceDeskComponent;
  let fixture: ComponentFixture<ServiceDeskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceDeskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceDeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
