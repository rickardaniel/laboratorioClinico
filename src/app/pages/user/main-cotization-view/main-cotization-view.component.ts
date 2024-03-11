import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CotizacionDetailComponent } from '../../../shared/cotizacion-detail/cotizacion-detail.component';
import { CotizacionComponent } from '../../../shared/cotizacion/cotizacion.component';
import { AllCotizacionComponent } from '../../../shared/all-cotizacion/all-cotizacion.component';

@Component({
  selector: 'app-main-cotization-view',
  standalone: true,
  // imports: [ CotizacionComponent, CotizacionDetailComponent],
  imports: [ AllCotizacionComponent],
  templateUrl: './main-cotization-view.component.html',
  styleUrl: './main-cotization-view.component.scss'
})
export class MainCotizationViewComponent implements OnChanges {
  @Output() updateCollapse = new EventEmitter<any>();
  // tam=[
  //   {id:1, name:'Hematología y Coagulación'},
  //   {id:2, name:'Estudio Tiroideo'},
  //   {id:3, name:'Bioquímica'},
  //   {id:4, name:'Estudios Hormonales'},
  //   // {id:5, name:'Estudios Hormonales'}
  // ]
  tam=[
    // [
      {
        idCategory: 1,
        name:'Hematología y Coagulación',
        data: [
          {
            id: 1,
            name: " Curva de Glucosa 50g (Test de O’ Sullivan)",
            price: 50.25
          },
          {
            id: 2,
            name: " Hematrocito - Hemoglobina",
            price: 35
          },
          {
            id: 3,
            name: " Biometría (hemograma completo)",
            price: 22.25
          },
          {
            id: 4,
            name: " Grupo sanguíneo",
            price: 120
          },
          {
            id: 5,
            name: " Células L.E.",
            price: 16.5
          },
          {
            id: 6,
            name: " Hematozoario",
            price: 12
          },
          {
            id: 7,
            name: " T.TP. (Tiempo de Tromboplastina Parcial)",
            price: 35
          },
          
        ]
      },
      {
        idCategory: 2,
        name:'Estudio Tiroideo',
        data: [
          {
            id: 8,
            name: "Examen de Presión Arterial",
            price: 25.50
          },
          {
            id: 9,
            name: "Examen de Orina Completo",
            price: 40.75
          },
          {
            id: 10,
            name: "Examen de Colesterol",
            price: 55.20
          },
          {
            id: 11,
            name: "Examen de Triglicéridos",
            price: 30.10
          },
          {
            id: 12,
            name: "Examen de Función Hepática",
            price: 75.90
          },
          {
            id: 13,
            name: "Examen de Creatinina",
            price: 20.00
          }
        ]
      },
      {
        idCategory: 3,
        name:'Bioquímica',
        data: [
          {
            id: 14,
            name: "Examen de Glucosa en Ayunas",
            price: 45.00
          },
          {
            id: 15,
            name: "Examen de Ácido Úrico",
            price: 35.80
          },
          {
            id: 16,
            name: "Examen de Antígeno Prostático Específico (PSA)",
            price: 65.25
          },
          {
            id: 17,
            name: "Examen de Papanicolaou",
            price: 28.50
          },
          {
            id: 18,
            name: "Examen de Tiroides",
            price: 42.30
          },
          {
            id: 19,
            name: "Examen de Vitamina D",
            price: 60.00
          }
        ]
      },
      {
        idCategory: 4,
        name:'Estudios Hormonales',
        data: [
          {
            id: 20,
            name: "Examen de Electrocardiograma",
            price: 80.00
          },
          {
            id: 21,
            name: "Examen de Tomografía Computarizada (TC)",
            price: 250.50
          },
          {
            id: 22,
            name: "Examen de Resonancia Magnética (RM)",
            price: 350.75
          },
          {
            id: 23,
            name: "Examen de Ecocardiografía",
            price: 120.00
          },
          {
            id: 24,
            name: "Examen de Radiografía",
            price: 45.00
          },
          {
            id: 25,
            name: "Examen de Mamografía",
            price: 95.80
          }
        ]
      }
    // ]
  ]
  arrayTest:any=[];
  test:any;
  constructor
  (
    private router: Router,
  )
  {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('cambios padre =====>', changes);
    
  }
  ngOnInit(){
    // console.log('llega padre', this.arrayTest);
    
  }
  returnHome(){
    this.router.navigateByUrl('inicio');
  }
  stepBefore(){
    this.router.navigateByUrl('user');
  }
  addFather(event:any){
    console.log('llega desde hijo', event);
    this.arrayTest= event;
    // this.arrayTest = this.eliminarObjeto(this.arrayTest, this.arrayTest[0].id)
 
  }

  deleteFather(event:any){
    console.log('llega de COTI DETALLE',event);
    const now =  new Date().getTime();
    event.delete =  now;
    this.test= event;
  }


}
