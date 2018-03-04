import { Component, OnInit } from '@angular/core';
import { VendorTransactionsService } from './vendor-transactions.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { VendorTransactionsModel } from '../models/VendorTransactionsModel';

@Component({
  selector: 'app-vendor-transactions',
  templateUrl: './vendor-transactions.component.html',
  styleUrls: ['./vendor-transactions.component.css']
})
export class VendorTransactionsComponent implements OnInit {

  //dataSource = new VendorTransactionsDataSource(this.vendorTransactionsService);
  dataSource = ELEMENT_DATA;
  displayedColumns = ['AGENT_ID', 'CUSTOMER_ID', 'VENDOR_ID', 'ITEM_ID', 'TRX_DATE', 'STATUS',
                      'EXP_ARRIVAL_TIME', 'FEEDBACK', 'CHECKIN_FLAG', 'NOTIFICATION_FLAG',
                      'NOTIFICATION_TIME', 'ORDER_COMPLETION_TIME', 'PAYMENT_ID', 'AMOUNT_PAID', 'INVOICE_NO','ACTION'];

  constructor( private  vendorTransactionsService: VendorTransactionsService) {

  }

  ngOnInit() {
  }
   foods = [
    {value: 'Ready-0', viewValue: 'Ready'},
    {value: 'PostPond-1', viewValue: 'PostPond'},
    {value: 'Canceled-2', viewValue: 'Canceled'}
  ];
}

// fake data to show the table


const ELEMENT_DATA: VendorTransactionsModel[] = [
  {AGENT_ID: 1, CUSTOMER_ID:1, VENDOR_ID:1, ITEM_ID:5, TRX_DATE:"10 / 10 / 2015", STATUS:"wating",
    EXP_ARRIVAL_TIME:"14.30 PM", FEEDBACK:"Good", CHECKIN_FLAG:"Checked In", NOTIFICATION_FLAG:"Notified",
    NOTIFICATION_TIME:"Notified at 14.35", ORDER_COMPLETION_TIME:"14.25", PAYMENT_ID:225, AMOUNT_PAID:110,
    INVOICE_NO:3,ACTION:this.foods},
  {AGENT_ID: 2, CUSTOMER_ID:2, VENDOR_ID:1, ITEM_ID:10, TRX_DATE:"10 / 10 / 2015", STATUS:"wating",
    EXP_ARRIVAL_TIME:"14.30 PM", FEEDBACK:"Good", CHECKIN_FLAG:"Checked In", NOTIFICATION_FLAG:"Notified",
    NOTIFICATION_TIME:"Notified at 14.35", ORDER_COMPLETION_TIME:"14.25", PAYMENT_ID:225, AMOUNT_PAID:110,
    INVOICE_NO:3,ACTION:this.foods},
  {AGENT_ID: 3, CUSTOMER_ID:3, VENDOR_ID:1, ITEM_ID:12, TRX_DATE:"10 / 10 / 2015", STATUS:"wating",
    EXP_ARRIVAL_TIME:"14.30 PM", FEEDBACK:"Good", CHECKIN_FLAG:"Checked In", NOTIFICATION_FLAG:"Notified",
    NOTIFICATION_TIME:"Notified at 14.35", ORDER_COMPLETION_TIME:"14.25", PAYMENT_ID:225, AMOUNT_PAID:110,
    INVOICE_NO:3,ACTION:this.foods},
  {AGENT_ID: 4, CUSTOMER_ID:4, VENDOR_ID:1, ITEM_ID:4, TRX_DATE:"10 / 10 / 2015", STATUS:"wating",
    EXP_ARRIVAL_TIME:"14.30 PM", FEEDBACK:"Good", CHECKIN_FLAG:"Checked In", NOTIFICATION_FLAG:"Notified",
    NOTIFICATION_TIME:"Notified at 14.35", ORDER_COMPLETION_TIME:"14.25", PAYMENT_ID:225, AMOUNT_PAID:110,
    INVOICE_NO:3,ACTION:this.foods},
];


/*
||=========================================================================||
||=======          Creating VendorTransactions DataSource           =======||
||=========================================================================||
*/
export class VendorTransactionsDataSource extends DataSource<any> {

  constructor(private  vendorTransactionsService: VendorTransactionsService) {
    super();
  }

  connect(): Observable<VendorTransactionsModel[]> {
    return this.vendorTransactionsService.getVendorTransactions();
  }

  disconnect() {}
}
