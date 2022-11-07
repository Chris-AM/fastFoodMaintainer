import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailySalesComponent } from './components/daily-sales/daily-sales.component';
import { HomeComponent } from './components/home/home.component';
import { IngredientComponent } from './components/ingredient/ingredient.component';
import { MenuComponent } from './components/menu/menu.component';
import { OrderComponent } from './components/order/order.component';
import { ProductComponent } from './components/product/product.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'daily-sales', component: DailySalesComponent },
  { path: 'ingredients', component: IngredientComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'order', component: OrderComponent },
  { path: 'product', component: ProductComponent },
  { path: 'users', component: UsersComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
