import { Injectable } from '@angular/core';
import { Modal, ModalInterface, ModalOptions } from 'flowbite';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 isOpen: boolean = true;

  constructor
  (
    private toastr: ToastrService
  )
  {
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

  // 2.- Buscar elemento en un arreglo y eliminarlo si ya existe
  verificarYModificar(elementos:any,obj:any) {
    // Verificar si el elemento está presente en el arreglo
    const index = elementos.findIndex((elemento:any) => elemento.id === obj.id);
    // Si el elemento no está presente, agregarlo al arreglo
    if (index === -1) {
        elementos.push(obj);
        console.log(`Se ha agregado el elemento con ID ${obj.id}.`);
    } else {
        // Si el elemento ya está presente, eliminarlo del arreglo
        elementos.splice(index, 1);
        console.log(`Se ha eliminado el elemento con ID ${obj.id}.`);
    }
  }

  // 3.- Recuperar datos de localStorage
  getDataLocalStorage(key:string):any{
    let data = localStorage.getItem(key);
    if(data){
      return data
    }
  }
  // -------------------------  TOAST SERVICE ------------------------------
  alertDanger( title: any, desc: any ) {
    this.toastr.error( desc, title );
  }

  alertSuccess( title: any, desc: any ) {
    this.toastr.success( desc, title );
  }

  alertWarning( title: any, desc: any ) {
    this.toastr.warning( desc, title );
  }
  alertInfo( title: any, desc: any ) {
    this.toastr.info( desc, title );
  }


}
