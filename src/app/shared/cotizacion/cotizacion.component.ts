import { Component, EventEmitter, Inject, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { RequirementComponent } from '../requirement/requirement.component';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
// import { MyAccordionService } from 'my-accordion-library'; // Replace with actual import

@Component({
  selector: 'app-cotizacion',
  standalone: true,
  imports: [CommonModule, RequirementComponent],
  templateUrl: './cotizacion.component.html',
  styleUrl: './cotizacion.component.scss'
})
export class CotizacionComponent  implements OnChanges {
  @Output() addTestFather = new EventEmitter<any>();
  @Input('dataCategories')tam:any
  @Input('test')test:any

exams =[
  {
    id:1, name: " Curva de Glucosa 50g (Test de O’ Sullivan)", price:50.25
  },
  {
    id:2, name: " Hematrocito - Hemoglobina", price:35
  },
  {
    id:3, name: " Biometría (hemograma completo)", price:22.25
  },
  {
    id:4, name: " Grupo sanguíneo", price:120
  },
  {
    id:5, name: " Células L.E.", price:16.5
  },
  {
    id:6, name: " Hematozoario", price:12
  },
  {
    id:7, name: " T.TP. (Tiempo de Tromboplastina Parcial)", price:35
  },
]
arrayTest:any=[];
categoria: any;
// @Inject('accordionService') MyAccordionService
constructor
(
  private api: ApiService
)
{
}
 
ngOnChanges(changes: SimpleChanges): void {
  console.log('cambios', changes);
  if(changes!['test'].currentValue==undefined){
  console.log('Entra cuando es undefined');
  this.arrayTest.push();
  }else{
    console.log('Se ejecuta cuando elimino desde detalle');

    this.selectTest(changes!['test'].currentValue);
    this.simularChange(changes!['test'].currentValue.id)
  }
  
}

openModal(name:string){
  let modal = this.api.createModal(name);
  modal.show();
  }

closeModal(flag: boolean, name: string) {
  let modal = this.api.createModal(name);

  if (flag) {
    modal.hide();
    // this.ruta.navigateByUrl('login')
  } else {
    modal.hide();
  }
} 
 
// Funtions Select Test Laboratory
selectTest(test:any){
  
  if(this.arrayTest.length==0){
    console.log('Entra primera vez cuando esta vacio')
    // const now =  new Date().getTime();
    // test.delete =  now;
    this.arrayTest.push(test);
    this.addTestFather.emit(this.arrayTest);
  }else{

   let result = this.api.verificarYModificar( this.arrayTest, test) ;    
  }
}

simularChange(pos:any) {
  console.log('llega pos', pos);
      // Tu código aquí
  let input = document.getElementById('dc'+pos) as HTMLInputElement ;
  console.log('agarro input', input);
    
    //   // // Disparar manualmente el evento change
    // input!.dispatchEvent(new Event('change'));
  input!.checked = false;
}

}
