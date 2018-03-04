import { Component, OnInit } from '@angular/core';
import { PaymentModel } from '../../models/Payment Model';
import { OrderService } from '../order-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  private selectedLink: string="3";
  payment: PaymentModel = new PaymentModel();

  constructor( private orderPaymentService: OrderService, private router:Router) { }

  ngOnInit() {
  }

  setRadio(e: string): void {
    this.selectedLink = e;
  }

  isSelected(name: string): boolean {
    if (!this.selectedLink)
    {
      return false;
    }
    return (this.selectedLink === name);
  }

  onPaymentConfirmation(){

    if(this.payment==undefined) {

      this.payment.paymentMethod=3;
      this.payment.paymentTypeRef=undefined;
    }
    else if (this.payment.paymentMethod==4) {

      this.payment.paymentTypeRef= this.payment.creditNumber;
    }
    else if (this.payment.paymentMethod==18) {

      this.payment.paymentTypeRef= this.payment.chequeNumber;
    }

    this.orderPaymentService.paymentConfirmation(this.payment).subscribe(response =>{


      console.log("Response : ",response);

      this.orderPaymentService.loading = true;
      this.router.navigate(['/confirmation']);
    },(error) =>{
      console.log(error);
      this.orderPaymentService.loading = false;
    });

  }

}
