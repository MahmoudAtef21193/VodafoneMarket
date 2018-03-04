import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { VendorTransactionsModel } from '../models/VendorTransactionsModel';

@Injectable()
export class VendorTransactionsService {


  private serviceUrl = '';

  constructor(private http: HttpClient) { }

  getVendorTransactions(): Observable<VendorTransactionsModel[]> {

    return this.http.get<VendorTransactionsModel[]>(this.serviceUrl);
  }
}
