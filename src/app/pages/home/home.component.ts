import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { Modal, ModalInterface, ModalOptions } from 'flowbite';
// import 'animate.css';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginComponentComponent } from '../../shared/login-component/login-component.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ReactiveFormsModule, LoginComponentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  origin='';
  constructor
  (
    private  route : Router
  )
  {
  }


  formLogin=new FormGroup({
    user: new FormControl('rickardaniel',[Validators.required]),
    pass: new FormControl('',[Validators.required]),
  })


  openModal(name:string){
    this.origin='home'
  let modal = this.createModal(name);
  modal.show();
  }
  createModal(modal: any) {
    const $modalElement: HTMLElement | any = document.querySelector(modal);
  
    const modalOptions: ModalOptions = {
      // placement: 'bottom-right',
      backdrop: 'static',
      // backdropClasses:
      //     'bg-blue-900/50 dark:bg-gray-900/80 fixed inset-0 z-40',
      closable: false,
    };
  
    const modalF: ModalInterface = new Modal($modalElement, modalOptions);
    return modalF;
    // modalF.show();
  }

  closeModal(flag: boolean, name: string) {
    let modal = this.createModal(name);
  
    if (flag) {
      modal.hide();
      // this.ruta.navigateByUrl('login')
    } else {
      modal.hide();
    }
  
    // this.modalService.show();
    // modalF.show();
  } 

  // =========================== LOGIN SYSTEM ROLES: USER, DOCTOR, ADMIN ==============================
  loginSystem(form:any){
    if(form.user=='rickardaniel'){
      this.route.navigateByUrl('user');
      localStorage.setItem('login', '1')
      this.closeModal(true, '#ModalLogin')
    }
  }

  redirectToCotization(){
    this.route.navigateByUrl('cotizacion')
  }
}
