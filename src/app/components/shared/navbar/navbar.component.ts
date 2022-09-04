import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

import { MESSAGES } from '../global-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public home: string = '';
  public ingredients: string = '';
  public product: string = '';
  public menus: string = '';
  public orders: string = '';
  public sales: string = '';
  public users: string ='';

  constructor() { }

  ngOnInit(): void {
    this.messages();
  }

  messages(){
    this.home = _.get(MESSAGES, 'NAVBAR.HOME');
    this.ingredients = _.get(MESSAGES, 'NAVBAR.INGREDIENTS');
    this.product = _.get(MESSAGES, 'NAVBAR.PRODUCT');
    this.menus = _.get(MESSAGES, 'NAVBAR.MENUS');
    this.orders = _.get(MESSAGES, 'NAVBAR.ORDERS');
    this.sales = _.get(MESSAGES, 'NAVBAR.SALES');
    this.users = _.get(MESSAGES, 'NAVBAR.USERS');
  }

}
