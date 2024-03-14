import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { LoginComponentComponent } from '../login-component/login-component.component';

@Component({
  selector: 'app-sub-header',
  standalone: true,
  imports: [LoginComponentComponent],
  templateUrl: './sub-header.component.html',
  styleUrl: './sub-header.component.scss'
})
export class SubHeaderComponent {
  @Input('origin') origin:any
  isLoged:any;
  // @Input('isLoged') isLoged:any

  constructor
  (
    private router: Router,
    private api: ApiService,

  )
  {
  }
  ngOnInit(){
    console.log('origen SubHeader', this.origin);
    this.getLogin(); 
  }
  redirectToCotization(){
    this.router.navigateByUrl('cotizacion')
  }
  returnHome(){
    localStorage.setItem('login','0')
    this.router.navigateByUrl('inicio');
  }

  stepBefore(){
    this.router.navigateByUrl('user');
  }
  stepBeforeHome(){
    this.router.navigateByUrl('inicio');
  }

  openModal(name:string){
    let modal = this.api.createModal(name);
    modal.show();
    this.origin='cotizacion';
    }

    
  updateLoginScreen(event:any){
    console.log('Llega y debe cambiar', event);
    this.origin='cotization'
    if(event){
      this.isLoged='1';
    }
  }
  getLogin(){
    this.isLoged = this.api.getDataLocalStorage('login');
    console.log('LOGIN', this.isLoged);
    
  }
}
