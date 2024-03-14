import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainViewDoctorComponent } from './main-view-doctor.component';

describe('MainViewDoctorComponent', () => {
  let component: MainViewDoctorComponent;
  let fixture: ComponentFixture<MainViewDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainViewDoctorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainViewDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
