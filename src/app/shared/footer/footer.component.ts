import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})

export class FooterComponent {
  public routes = [
    {
      'id':0 , 'url': 'https://hcsa.ec/solicitar-una-cita-online-en-hospital-clinica-san-agustin/'
    },
    {
      'id':1 , 'url': 'https://hcsa.ec/servicios-hospital-clinica-san-agustin/'
    },
    {
      'id':2 , 'url': 'https://hcsa.ec/trabajos-en-loja-en-hospital-clinica-san-agustin/'
    },
    {
      'id':3 , 'url': 'https://hcsa.ec/nosotros/'
    },
    {
      'id':4 , 'url': 'https://educacioncontinua.hcsa.ec/'
    },

  ]
  year:any;
  ngOnInit(){
   this.year =  new Date().getFullYear();
  }

  redirecTo(){
    window.open('https://www.google.com/maps/place/Hospital+Cl%C3%ADnica+%22San+Agustin%22+en+Loja/@-4.0005414,-79.2041758,562m/data=!3m1!1e3!4m6!3m5!1s0x91cb37fe57ea6d83:0x17847b501837cffe!8m2!3d-4.0001301!4d-79.2037232!16s%2Fg%2F1vfn7qsn?entry=ttu', '_blank')
  }
}
