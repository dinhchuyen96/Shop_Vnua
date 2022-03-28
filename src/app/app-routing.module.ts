import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproComponent } from './addpro/addpro.component';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';
import { CategoryComponent } from './category/category.component';
import { DataloginComponent } from './datalogin/datalogin.component';
import { DccodeComponent } from './dccode/dccode.component';
import { DetailComponent } from './detail/detail.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { InforcusComponent } from './inforcus/inforcus.component';
import { LoginComponent } from './login/login.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
import { ToppageComponent } from './toppage/toppage.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'toppage', component: ToppageComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'login', component: LoginComponent },
  { path: 'datalogin', component: DataloginComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product/:id', component: ProductComponent},
  { path: 'category', component: CategoryComponent },
  { path: 'addpro', component: AddproComponent},
  { path: 'inforcus',component: InforcusComponent},
  { path: 'order/:id', component: OrderComponent},
  { path: 'dccode', component: DccodeComponent},
  { path: 'my-orders', component: MyOrdersComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'cart', component: CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
