import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailySalesComponent } from './components/pages/daily-sales/daily-sales.component';
import { HomeComponent } from './components/home/home.component';
import { IngredientComponent } from './components/pages/ingredient/ingredient.component';
import { MenuComponent } from './components/pages/menu/menu.component';
import { OrderComponent } from './components/pages/order/order.component';
import { ProductComponent } from './components/pages/product/product.component';
import { UsersComponent } from './components/pages/users/users.component';

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
