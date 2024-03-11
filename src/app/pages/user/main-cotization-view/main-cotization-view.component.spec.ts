import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCotizationViewComponent } from './main-cotization-view.component';

describe('MainCotizationViewComponent', () => {
  let component: MainCotizationViewComponent;
  let fixture: ComponentFixture<MainCotizationViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainCotizationViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainCotizationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
