import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendorTransactionsComponent } from './vendor-transactions/vendor-transactions.component';
import { OrderComponent } from './order/order.component';



const appRoutes: Routes = [

  {
    path:'vendor',
    component:VendorTransactionsComponent
  },

  {
    path:'customer',
    component: OrderComponent
  },


  {
    path: '',
    redirectTo: '/customer',
    pathMatch: 'full'
  }

];


@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(appRoutes)
  ]
})
export class AppRoutingModule { }
