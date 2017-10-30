import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleButtonsComponent } from './google-buttons.component';

describe('GoogleButtonsComponent', () => {
  let component: GoogleButtonsComponent;
  let fixture: ComponentFixture<GoogleButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
