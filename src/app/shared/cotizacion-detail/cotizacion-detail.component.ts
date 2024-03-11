import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-cotizacion-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cotizacion-detail.component.html',
  styleUrl: './cotizacion-detail.component.scss'
})
export class CotizacionDetailComponent implements OnChanges {

@Input('arrayTest')arrayTest:any;
@Output() updateTestFather = new EventEmitter<any>();

total:any;

constructor
(
  private api: ApiService
)
{ 
}

ngOnInit(){
  // console.log('llega de padre a hijo', this.arrayTest);
  
}

ngOnChanges(changes: SimpleChanges): void {
  this.arrayTest= changes['arrayTest'].currentValue;
  console.log('llega de padre a hijo',  this.arrayTest);

  
}
calcularTotal(array:any){
  let val = 0;
  for (let i = 0; i < array.length; i++) {
    val += array[i].price;  
  }
  // console.log(val);
  return val;
}


deleteTest(test:any){
  console.log('test a eliminar', test);

  // let result = this.api.verificarYModificar( this.arrayTest, test) ;    
  this.updateTestFather.emit(test)

}




}
