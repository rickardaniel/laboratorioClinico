import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  public routes=[
    {
      'id':1 , 'url': 'https://hcsa.ec/'
    },
    {
      'id':2 , 'url': 'https://hcsa.ec/nosotros/'
    },
    {
      'id':3 , 'url': 'https://hcsa.ec/derechos-y-obligaciones-del-paciente-del-hospital-clinica-san-agustin/'
    },
    {
      'id':4 , 'url': 'https://hcsa.ec/especialidades-medicas/'
    },
    {
      'id':5 , 'url': 'https://hcsa.ec/servicios-hospital-clinica-san-agustin/'
    },
    {
      'id':6 , 'url': 'https://revistaindexia.com/'
    },
    {
      'id':7 , 'url': 'https://hcsa.ec/responsabilidad-social/'
    },
    {
      'id':8 , 'url': 'https://hcsa.ec/blog/'
    },
    {
      'id':9 , 'url': 'https://www.facebook.com/hcsanagustin'
    },
    {
      'id':10 , 'url': 'https://www.instagram.com/hcsanagustin/'
    },
    {
      'id':11 , 'url': 'https://ec.linkedin.com/company/hospital-cl%C3%ADnica-san-agust%C3%ADn-hcsa'
    },

  ]

  constructor
  (
    private router: Router
  ) 
  {
  }

  redirecto(id:number){
    if(id==9){
      window.open(this.routes[8].url, '_blank');
    }else if (id==10){
      window.open(this.routes[9].url, '_blank');
    }else if (id==11){
      window.open(this.routes[10].url, '_blank');
    }else{
      window.location.href = this.routes[11].url;
    }
  }
}
