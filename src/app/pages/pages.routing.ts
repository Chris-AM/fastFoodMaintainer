import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DailySalesComponent } from './daily-sales/daily-sales.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './order/order.component';
import { PagesComponent } from './pages.component';
import { ProductComponent } from './product/product.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'home', component: DashboardComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: '**', pathMatch: 'full', redirectTo: 'home' },
      { path: 'daily-sales', component: DailySalesComponent },
      { path: 'ingredients', component: IngredientComponent },
      { path: 'menu', component: MenuComponent },
      { path: 'order', component: OrderComponent },
      { path: 'product', component: ProductComponent },
      { path: 'users', component: UsersComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
