import { Component } from '@angular/core';
import { SubHeaderComponent } from '../../../shared/sub-header/sub-header.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-main-view-doctor',
  standalone: true,
  imports: [ReactiveFormsModule, SubHeaderComponent],
  templateUrl: './main-view-doctor.component.html',
  styleUrl: './main-view-doctor.component.scss'
})
export class MainViewDoctorComponent {
  patient:any=[
    {
      name:'Richard Daniel Chimbo Torres',
      
    }
  ];

  constructor
  (
    private api : ApiService
  )
  {
  }
  origin='user';
  formSearchPatient=new FormGroup({
    // user: new FormControl('rickardaniel',[Validators.required]),
    name: new FormControl('Richard',[Validators.required]),
  })

  searchPatient(form:any){
      if(form.name=='Richard'){
        this.api.alertSuccess('OK','Paciente encontrado');

      }
  }
}
