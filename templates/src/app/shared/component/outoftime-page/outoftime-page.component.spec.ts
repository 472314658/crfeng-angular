import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutoftimePageComponent } from './outoftime-page.component';

describe('OutoftimePageComponent', () => {
  let component: OutoftimePageComponent;
  let fixture: ComponentFixture<OutoftimePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutoftimePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutoftimePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
