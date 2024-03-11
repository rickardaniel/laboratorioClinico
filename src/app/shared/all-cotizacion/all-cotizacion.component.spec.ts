import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCotizacionComponent } from './all-cotizacion.component';

describe('AllCotizacionComponent', () => {
  let component: AllCotizacionComponent;
  let fixture: ComponentFixture<AllCotizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllCotizacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllCotizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
