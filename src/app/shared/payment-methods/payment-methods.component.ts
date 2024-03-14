import { Component, EventEmitter, Output } from '@angular/core';
import { SubHeaderComponent } from '../sub-header/sub-header.component';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../spinner/spinner.component';
import { ApiService } from '../../services/api.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-methods',
  standalone: true,
  imports: [CommonModule, SubHeaderComponent, SpinnerComponent],
  templateUrl: './payment-methods.component.html',
  styleUrl: './payment-methods.component.scss'
})
export class PaymentMethodsComponent {
  @Output() saveCloseOrder = new EventEmitter<any>();
  flagLoader=false;
  origen ='cotization';
  flagActive=false;
  flagPE=false;
  flagPP=false;
  flagDU=false;
  flagA=false;
  flagT=false;
  tipo:any;

  constructor
  (
    private api: ApiService,
    private router: Router,

  )
  { 
  }

  payment(tipo:any){
    console.log('TIPO', tipo);
    this.flagActive=true;
    if(tipo=='efectivo'){
      this.tipo="Efectivo";
      this.flagPE=true;
      this.flagPP=false;
      this.flagDU=false;
      this.flagA=false;
      this.flagT=false;
    }else if(tipo=='paypal'){
      this.tipo="Paypal";
      this.flagPE=false;
      this.flagPP=true;
      this.flagDU=false;
      this.flagA=false;
      this.flagT=false;
    }else if(tipo=='deUna'){
      this.tipo="DeUna";
      this.flagPE=false;
      this.flagPP=false;
      this.flagDU=true;
      this.flagA=false;
      this.flagT=false;
    }else if(tipo=='Ahorita'){
      this.tipo="Ahorita";
      this.flagPE=false;
      this.flagPP=false;
      this.flagDU=false;
      this.flagA=true;
      this.flagT=false;
    }else if(tipo=='tarjeta'){
      this.tipo="Tarjeta";
      this.flagPE=false;
      this.flagPP=false;
      this.flagDU=false;
      this.flagA=false;
      this.flagT=true;
    }
  }
  closePayment(){
    this.flagActive=false;
  }

  saveOrder(){
    this.flagLoader=true;
    setTimeout(() => {
    this.flagLoader=false;
    this.api.alertSuccess('OK', 'Orden creada correctamente');
    Swal.fire({
      title: "¿Desea imprimir la orden?",
      showDenyButton: true,
      confirmButtonColor:'#004E8C',
      // showCancelButton: true,
      confirmButtonText: "Si, imprimir",
      denyButtonText: `No por ahora`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        // Swal.fire("Changes are not saved", "", "info");
        this.saveCloseOrder.emit(true);
        this.closeModal(true, '#ModalMetodosPago');

      }
    });
    }, 1500);
  }

  cancelOrder(){
    this.router.navigateByUrl('cotizacion');
    
  }
  closeModal(flag: boolean, name: string) {
    let modal = this.api.createModal(name);
  
    if (flag) {
      modal.hide();
      // this.ruta.navigateByUrl('login')
    } else {
      modal.hide();
    }
  
    // this.modalService.show();
    // modalF.show();
  } 
  
  
}
