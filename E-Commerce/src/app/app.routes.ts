import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellingAuthComponent } from './selling-auth/selling-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerLoginComponent } from './seller-login/seller-login.component';
import { sellingAuthGuard } from './route-guards';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'seller-auth',component:SellingAuthComponent},
    {path:'seller-home',component:SellerHomeComponent,canActivate:[sellingAuthGuard]},
    {path:'seller-login',component:SellerLoginComponent},
];
