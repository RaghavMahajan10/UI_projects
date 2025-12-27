import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellingAuthComponent } from './selling-auth/selling-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerLoginComponent } from './seller-login/seller-login.component';
import { sellingAuthGuard } from './route-guards';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'seller-auth',component:SellingAuthComponent},
    {path:'seller-login',component:SellerLoginComponent},
    {path:'seller-home',component:SellerHomeComponent,canActivate:[sellingAuthGuard]},
    {path:'add-product',component:AddProductComponent,canActivate:[sellingAuthGuard]},
    {path:'product/:id',component:EditProductComponent,canActivate:[sellingAuthGuard]},
];
