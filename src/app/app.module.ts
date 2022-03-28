import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'; 
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ToppageComponent } from './toppage/toppage.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { DetailComponent } from './detail/detail.component';
import { AdminComponent } from './admin/admin.component';
import { CategoryComponent } from './category/category.component';
import { AddproComponent } from './addpro/addpro.component';
import { InforcusComponent } from './inforcus/inforcus.component';
import { OrderComponent } from './order/order.component';
import { DccodeComponent } from './dccode/dccode.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { RegisterComponent } from './register/register.component';
import { DataloginComponent } from './datalogin/datalogin.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    ToppageComponent,
    LoginComponent,
    ProductComponent,
    DetailComponent,
    AdminComponent,
    CategoryComponent,
    AddproComponent,
    InforcusComponent,
    OrderComponent,
    DccodeComponent,
    MyOrdersComponent,
    RegisterComponent,
    DataloginComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
