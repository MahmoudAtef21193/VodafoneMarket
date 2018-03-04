import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {CatalogsModel} from '../models/CatalogsModel';
import {ItemsModel} from '../models/ItemsModel';
import {PaymentModel} from '../models/Payment Model';
@Injectable()
export class OrderService {

  loading= false;
  private catalogsUrl = '';
  private itemsUrl = '';
  private paymentUrl='';

  constructor(private http: HttpClient) { }

  // get catalogs from database

  getCatalogs() {

    return this.http.get<CatalogsModel>(this.catalogsUrl);
  }

  /*====================================================================================*/
         // get Items from database

  getItems() {

    return this.http.get<ItemsModel>(this.itemsUrl);
  }

  /*====================================================================================*/
          // payment method

  paymentConfirmation(paymentForm){
    return this.http.post<PaymentModel>(this.paymentUrl,paymentForm);
  }
}
