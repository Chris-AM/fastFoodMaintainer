import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import { DailySalesComponent } from './components/pages/daily-sales/daily-sales.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { IngredientComponent } from './components/pages/ingredient/ingredient.component';
import { MenuComponent } from './components/pages/menu/menu.component';
import { OrderComponent } from './components/pages/order/order.component';
import { PagesComponent } from './components/pages/pages.component';
import { ProductComponent } from './components/pages/product/product.component';
import { UsersComponent } from './components/pages/users/users.component';

const routes: Routes = [
  { path: '', component: PagesComponent,
    children: [
      { path: 'home', component: DashboardComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'daily-sales', component: DailySalesComponent },
      { path: 'ingredients', component: IngredientComponent },
      { path: 'menu', component: MenuComponent },
      { path: 'order', component: OrderComponent },
      { path: 'product', component: ProductComponent },
      { path: 'users', component: UsersComponent },
    ],
  },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
