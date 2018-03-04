export interface VendorTransactionsModel{

  //TRANSACTION_ID: number;
  AGENT_ID: number;
  CUSTOMER_ID:number;
  VENDOR_ID:number;
  ITEM_ID:number;
  TRX_DATE:string;
  STATUS:string;
  EXP_ARRIVAL_TIME:string;
  FEEDBACK:string;
  CHECKIN_FLAG:string;
  NOTIFICATION_FLAG:string;
  NOTIFICATION_TIME:string;
  ORDER_COMPLETION_TIME:string;
  PAYMENT_ID:number;
  AMOUNT_PAID:number;
  INVOICE_NO:number;
  ACTION:any[];

}
