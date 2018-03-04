import {Component, Inject, OnInit} from '@angular/core';
import {CatalogsModel} from '../../models/CatalogsModel';
import {ItemsModel} from '../../models/ItemsModel';
import {Observable} from 'rxjs/Observable';
import {OrderService} from '../order-service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  //catalogs: CatalogsModel = new CatalogsModel();
  //items: ItemsModel = new ItemsModel();
  showNext: string;
  itemsArray: any = ['itemTable'];

    constructor(private orderService: OrderService) { }

  ngOnInit() {
  /*  this.getOrderCatalogs();
    this.getCatalogItems();
  */}

  onSelect(){
    this.showNext = this.itemsArray[0];
  }


  /*getOrderCatalogs(){

     this.orderService.getCatalogs().subscribe( response=>{
      this.catalogs.CatalogName = response.CatalogName;
      },(error) =>{console.log(error)});
  }


  getCatalogItems(){

    this.orderService.getItems().subscribe( response=>{
      this.items.ItemName = response.ItemName;
    },(error) =>{console.log(error)});
  }
*/



  catalogs = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  itemsex = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
}

