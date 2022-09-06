import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientComponent } from './ingredient/ingredient.component';
import { ProductComponent } from './product/product.component';
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './order/order.component';
import { DailySalesComponent } from './daily-sales/daily-sales.component';
import { UsersComponent } from './users/users.component';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    IngredientComponent,
    ProductComponent,
    MenuComponent,
    OrderComponent,
    DailySalesComponent,
    UsersComponent,
    PagesComponent,
    DashboardComponent,
  ],
  exports: [
    IngredientComponent,
    ProductComponent,
    MenuComponent,
    OrderComponent,
    DailySalesComponent,
    UsersComponent,
    PagesComponent,
    DashboardComponent,
  ],
  imports: [AppRoutingModule, CommonModule, SharedModule],
})
export class PagesModule {}
