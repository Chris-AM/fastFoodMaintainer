import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { IngredientComponent } from './components/pages/ingredient/ingredient.component';
import { ProductComponent } from './components/pages/product/product.component';
import { MenuComponent } from './components/pages/menu/menu.component';
import { OrderComponent } from './components/pages/order/order.component';
import { DailySalesComponent } from './components/pages/daily-sales/daily-sales.component';
import { UsersComponent } from './components/pages/users/users.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BreadcrumbsComponent } from './components/shared/breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { PagesComponent } from './components/pages/pages.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    IngredientComponent,
    ProductComponent,
    MenuComponent,
    OrderComponent,
    DailySalesComponent,
    UsersComponent,
    LoginComponent,
    RegisterComponent,
    BreadcrumbsComponent,
    SidebarComponent,
    HeaderComponent,
    PagesComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
