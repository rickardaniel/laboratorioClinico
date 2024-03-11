import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-requirement',
  standalone: true,
  imports: [],
  templateUrl: './requirement.component.html',
  styleUrl: './requirement.component.scss'
})
export class RequirementComponent {
  @Output() close = new EventEmitter<any>();

  closeModal(){
    this.close.emit(true);
   }
}
