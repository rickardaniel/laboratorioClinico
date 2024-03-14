import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SubHeaderComponent } from '../../../shared/sub-header/sub-header.component';

@Component({
  selector: 'app-main-view-user',
  standalone: true,
  imports: [CommonModule, SubHeaderComponent],
  templateUrl: './main-view-user.component.html',
  styleUrl: './main-view-user.component.scss'
})
export class MainViewUserComponent {
  orderUser= [
    {'id':123, 'state':"completo"},
    {'id':124, 'state':"en proceso"},
    {'id':125, 'state':"en proceso"},
    {'id':126, 'state':"en espera"},
    {'id':127, 'state':"completo"},
    {'id':128, 'state':"completo"},
    {'id':129, 'state':"en espera"},
    {'id':130, 'state':"completo"},
  ]
  copiaOrderUser:any=[];
  filteredOrders:any=[];
  origin='user';
  constructor
  (
    private router: Router,
  )
  {
  }

  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
    // this.arrayTemp= Array.from(this.orderUser);
    this.copiaOrderUser = this.orderUser.slice();
    let event={
      target:{
        value:0
      }
    }
    this.selectTypeOrder(event)
  }
  returnHome(){
    localStorage.setItem('login','0')
    this.router.navigateByUrl('inicio');
  }
  
  seeDetailOrder(){
    let idCuenta = '0215'
    let ruta = ':idOrden'
    ruta = ruta.replace(':idOrden', idCuenta.toString())
    const modulo = "user"
    console.log(modulo + '/' + ruta);
    this.router.navigateByUrl(modulo + '/' + ruta).then();
  }

  selectTypeOrder(event: any) {
    const tipoFiltro = event.target.value;
  
    // let filteredOrders;
    switch (tipoFiltro) {
      case '1':
        this.filteredOrders = this.copiaOrderUser.filter((order:any) => order.state === 'en espera');
        break;
      case '2':
        this.filteredOrders = this.copiaOrderUser.filter((order:any) => order.state === 'en proceso');
        break;
      case '3':
        this.filteredOrders = this.copiaOrderUser.filter((order:any)  => order.state === 'completo');
        break;
      default:
        this.filteredOrders = this.copiaOrderUser;
    }
  
    // Aquí puedes usar "filteredOrders" para mostrar los pedidos filtrados.
  }

  redirectToCotization(){
    this.router.navigateByUrl('cotizacion')
  }
}
