import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.scss'
})
export class LoginComponentComponent {
@Input('origin')origin:any;
@Output() loginCliente = new EventEmitter<any>();

  constructor
  (
    private api:ApiService,
    private route: Router
  )
  {
  }
  ngOnInit(){
    console.log('ORIGEN', this.origin);    
  }
  formLogin=new FormGroup({
    // user: new FormControl('rickardaniel',[Validators.required]),
    user: new FormControl('doctor',[Validators.required]),
    pass: new FormControl('',[Validators.required]),
  })

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

  loginSystem(form:any){
    if(this.origin=='home'){
      if(form.user=='rickardaniel'){
        
        localStorage.setItem('login', '1')
        this.api.alertSuccess('','Acceso Autorizado')
        this.closeModal(true, '#ModalLoginCotizacion');
        this.route.navigateByUrl('user');
      }if(form.user=='doctor'){
        localStorage.setItem('login', '1');
        this.api.alertSuccess('','Acceso como Médico');
        this.closeModal(true, '#ModalLoginCotizacion');
        this.route.navigateByUrl('doctor');
      }
    }else{
      console.log('ENTRA A ESTE ESCENARIO');
      if(form.user=='rickardaniel'){
        
        localStorage.setItem('login', '1')
        this.api.alertSuccess('','Acceso Permitido')
        this.closeModal(true, '#ModalLoginCotizacion');
        // this.route.navigateByUrl('user');
        this.loginCliente.emit(true);
      }
    }

  }
}
