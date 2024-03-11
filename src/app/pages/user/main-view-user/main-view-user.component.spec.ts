import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainViewUserComponent } from './main-view-user.component';

describe('MainViewUserComponent', () => {
  let component: MainViewUserComponent;
  let fixture: ComponentFixture<MainViewUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainViewUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainViewUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
