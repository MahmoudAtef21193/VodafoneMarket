import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import {CatalogComponent} from './catalog/catalog.component';



const orderRoutes: Routes = [

  {
    path: 'catalog',
    component: CatalogComponent
  },

  {
    path:'payment',
    component: PaymentComponent
  },

  {
    path:'confirmation',
    component: ConfirmationComponent
  },

  {
    path: '',
    redirectTo: '/catalog',
    pathMatch: 'full'
  }

];


@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(orderRoutes)
  ]
})
export class OrderRoutingModule { }
