import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MainViewUserComponent } from './pages/user/main-view-user/main-view-user.component';
import { OrderDetailComponent } from './shared/order-detail/order-detail.component';
import { MainCotizationViewComponent } from './pages/user/main-cotization-view/main-cotization-view.component';

export const routes: Routes = [
    {
        path:'inicio', component:HomeComponent
    },
    {
        path:'cotizacion', component:MainCotizationViewComponent
    },
    {
        path:'user', component:MainViewUserComponent
    },
    {
        path:'user/:idOrden',
       component: OrderDetailComponent
    },
];
