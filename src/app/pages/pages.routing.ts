import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DailySalesComponent } from './daily-sales/daily-sales.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './order/order.component';
import { PagesComponent } from './pages.component';
import { ProductComponent } from './product/product.component';
import { TestComponent } from './hidden/test.component';
import { UsersComponent } from './users/users.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'daily-sales', component: DailySalesComponent },
      { path: 'ingredients', component: IngredientComponent },
      { path: 'menus', component: MenuComponent },
      { path: 'orders', component: OrderComponent },
      { path: 'products', component: ProductComponent },
      { path: 'users', component: UsersComponent },
      { path: 'test', component: TestComponent },
      { path: 'account-settings', component: AccountSettingsComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
