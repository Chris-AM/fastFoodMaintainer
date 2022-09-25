//node_modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgChartsModule } from 'ng2-charts';

//own_modules
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

//components
import { IngredientComponent } from './ingredient/ingredient.component';
import { ProductComponent } from './product/product.component';
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './order/order.component';
import { DailySalesComponent } from './daily-sales/daily-sales.component';
import { UsersComponent } from './users/users.component';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestComponent } from './hidden/test.component';

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
    TestComponent,
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
  imports: [
    RouterModule,
    CommonModule,
    SharedModule,
    FormsModule,
    ComponentsModule,
    NgChartsModule
  ],
})
export class PagesModule {}
