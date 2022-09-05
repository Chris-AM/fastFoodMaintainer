import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import { DailySalesComponent } from './pages/daily-sales/daily-sales.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { IngredientComponent } from './pages/ingredient/ingredient.component';
import { MenuComponent } from './pages/menu/menu.component';
import { OrderComponent } from './pages/order/order.component';
import { PagesComponent } from './pages/pages.component';
import { ProductComponent } from './pages/product/product.component';
import { UsersComponent } from './pages/users/users.component';

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
