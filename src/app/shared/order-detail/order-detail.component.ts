import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { RequirementComponent } from '../requirement/requirement.component';

@Component({
  selector: 'app-order-detail',
  standalone: true,
  imports: [RequirementComponent],
  templateUrl: './order-detail.component.html',
  styleUrl: './order-detail.component.scss'
})
export class OrderDetailComponent {
  constructor
  (
    private router: Router,
    private api : ApiService
  )
  {
  }

  
  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' });  }
  returnHome(){
    this.router.navigateByUrl('inicio');
  }
  stepBefore(){
    this.router.navigateByUrl('user');
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

  openModal(name:string){
    let modal = this.api.createModal(name);
    modal.show();
    }



}
