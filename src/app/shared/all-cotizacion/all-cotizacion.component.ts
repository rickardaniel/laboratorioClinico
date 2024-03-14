import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { PaymentMethodsComponent } from '../payment-methods/payment-methods.component';

@Component({
  selector: 'app-all-cotizacion',
  standalone: true,
  imports: [CommonModule, PaymentMethodsComponent],
  templateUrl: './all-cotizacion.component.html',
  styleUrl: './all-cotizacion.component.scss'
})
export class AllCotizacionComponent {
  @Input('dataCategories')tam:any
  @Input('isLoged') isLoged:any;
  arrayTest:any=[];
  categoria: any;
  // exams=[
  //   // [
  //     {
  //       idCategory: 1,
  //       data: [
  //         {
  //           id: 1,
  //           name: " Curva de Glucosa 50g (Test de O’ Sullivan)",
  //           price: 50.25
  //         },
  //         {
  //           id: 2,
  //           name: " Hematrocito - Hemoglobina",
  //           price: 35
  //         },
  //         {
  //           id: 3,
  //           name: " Biometría (hemograma completo)",
  //           price: 22.25
  //         },
  //         {
  //           id: 4,
  //           name: " Grupo sanguíneo",
  //           price: 120
  //         },
  //         {
  //           id: 5,
  //           name: " Células L.E.",
  //           price: 16.5
  //         },
  //         {
  //           id: 6,
  //           name: " Hematozoario",
  //           price: 12
  //         },
  //         {
  //           id: 7,
  //           name: " T.TP. (Tiempo de Tromboplastina Parcial)",
  //           price: 35
  //         },
          
  //       ]
  //     },
  //     {
  //       idCategory: 2,
  //       data: [
  //         {
  //           id: 8,
  //           name: "Examen de Presión Arterial",
  //           price: 25.50
  //         },
  //         {
  //           id: 9,
  //           name: "Examen de Orina Completo",
  //           price: 40.75
  //         },
  //         {
  //           id: 10,
  //           name: "Examen de Colesterol",
  //           price: 55.20
  //         },
  //         {
  //           id: 11,
  //           name: "Examen de Triglicéridos",
  //           price: 30.10
  //         },
  //         {
  //           id: 12,
  //           name: "Examen de Función Hepática",
  //           price: 75.90
  //         },
  //         {
  //           id: 13,
  //           name: "Examen de Creatinina",
  //           price: 20.00
  //         }
  //       ]
  //     },
  //     {
  //       idCategory: 3,
  //       data: [
  //         {
  //           id: 14,
  //           name: "Examen de Glucosa en Ayunas",
  //           price: 45.00
  //         },
  //         {
  //           id: 15,
  //           name: "Examen de Ácido Úrico",
  //           price: 35.80
  //         },
  //         {
  //           id: 16,
  //           name: "Examen de Antígeno Prostático Específico (PSA)",
  //           price: 65.25
  //         },
  //         {
  //           id: 17,
  //           name: "Examen de Papanicolaou",
  //           price: 28.50
  //         },
  //         {
  //           id: 18,
  //           name: "Examen de Tiroides",
  //           price: 42.30
  //         },
  //         {
  //           id: 19,
  //           name: "Examen de Vitamina D",
  //           price: 60.00
  //         }
  //       ]
  //     },
  //     {
  //       idCategory: 4,
  //       data: [
  //         {
  //           id: 20,
  //           name: "Examen de Electrocardiograma",
  //           price: 80.00
  //         },
  //         {
  //           id: 21,
  //           name: "Examen de Tomografía Computarizada (TC)",
  //           price: 250.50
  //         },
  //         {
  //           id: 22,
  //           name: "Examen de Resonancia Magnética (RM)",
  //           price: 350.75
  //         },
  //         {
  //           id: 23,
  //           name: "Examen de Ecocardiografía",
  //           price: 120.00
  //         },
  //         {
  //           id: 24,
  //           name: "Examen de Radiografía",
  //           price: 45.00
  //         },
  //         {
  //           id: 25,
  //           name: "Examen de Mamografía",
  //           price: 95.80
  //         }
  //       ]
  //     }
  //   // ]
  // ]
  collapse='open';
  flagCollapse=false;
  public ver1=false
  public ver2=false
  public ver3=false
  public ver4=false
  constructor
(
  public api: ApiService,
  public router: Router,
)
{
  this.collapse='open';
  
}

OnInit(){
  console.log('exams', this.tam);
  this.handleCrearCotizacion();
  this.collapse='open';

}
  // Estado del accordion
  handleCrearCotizacion() {
    this.api.isOpen = true; // Abrir el accordion al redirigir a VistaCotizacion
    // Código para redirigir a VistaCotizacion
    this.collapse='open';
  }

getTestCategory(idCategory:any){
   
}

  selectTest(test:any){
  
    if(this.arrayTest.length==0){
      console.log('Entra primera vez cuando esta vacio')
      // const now =  new Date().getTime();
      // test.delete =  now;
      this.arrayTest.push(test);
      // this.addTestFather.emit(this.arrayTest);
    }else{
  
     let result = this.api.verificarYModificar( this.arrayTest, test) ;    
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
  
    let result = this.api.verificarYModificar( this.arrayTest, test) ;    
    this.simularChange(test.id)
  
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

  openCard(id:any, action:any){
      console.log(id);
        this.flagCollapse=true;
        if(id==1){
          this.ver1=true;
        }
  }
  closeCard(id:any, action:any){
      console.log(id);
      this.flagCollapse=false;

  }

  showToast(){
    this.api.alertInfo('',"Primero debe iniciar sesión")
  }

  toggleSection() {
    const section = document.querySelector(".section.collapsible");
    console.log('section', section);
    
    section!.classList.toggle("collapsed");
  }

  // seeDetailOrder(){
  //   let idCuenta = '0215'
  //   let ruta = ':idOrden'
  //   ruta = ruta.replace(':idOrden', idCuenta.toString())
  //   const modulo = "cotizacion"
  //   console.log(modulo + '/' + ruta);
  //   this.router.navigateByUrl(modulo + '/' + ruta).then();
  // }
  seeDetailOrder(modal:any){
    console.log('entra', modal);
    
    // this.api.createModal(modal);
    let modal2 = this.api.createModal(modal);
    modal2.show();
  }

  updateOrder(event:any){
    if(event){
      this.router.navigateByUrl('user');
    }
  }
}
