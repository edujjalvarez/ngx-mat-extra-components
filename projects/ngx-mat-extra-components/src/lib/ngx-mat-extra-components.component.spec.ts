import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMatExtraComponentsComponent } from './ngx-mat-extra-components.component';

describe('NgxMatExtraComponentsComponent', () => {
  let component: NgxMatExtraComponentsComponent;
  let fixture: ComponentFixture<NgxMatExtraComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMatExtraComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMatExtraComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
