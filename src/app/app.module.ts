import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { VendorLoginComponent } from './login/vendor-login/vendor-login.component';
import { CustomerLoginComponent } from './login/customer-login/customer-login.component';
import { RegistrationComponent } from './login/registration/registration.component';
import { OrderComponent } from './order/order.component';
import { VendorComponent } from './order/vendor/vendor.component';
import { CatalogComponent} from './order/catalog/catalog.component';
import { PaymentComponent } from './order/payment/payment.component';
import { ConfirmationComponent } from './order/confirmation/confirmation.component';
import { ProgressComponent } from './order/progress/progress.component';
import { VendorTransactionsComponent } from './vendor-transactions/vendor-transactions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { VendorTransactionsService } from './vendor-transactions/vendor-transactions.service';
import { MatTableModule} from '@angular/material';
import { OrderService} from './order/order-service';
import {OrderRoutingModule} from './order/order-routing.module';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VendorLoginComponent,
    CustomerLoginComponent,
    RegistrationComponent,
    OrderComponent,
    VendorComponent,
    CatalogComponent,
    PaymentComponent,
    ConfirmationComponent,
    ProgressComponent,
    VendorTransactionsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    FormsModule,
    OrderRoutingModule,
    AppRoutingModule
  ],
  providers: [VendorTransactionsService,OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
