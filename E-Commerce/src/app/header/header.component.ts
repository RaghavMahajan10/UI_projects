import { Component, inject } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  services = inject(SellerService);
  isSellerLoggedIn = localStorage.getItem('seller');
  userName:string='';
  ngOnInit(){
    const sellerData = localStorage.getItem('seller');
    if (sellerData) {
      const seller = JSON.parse(sellerData);
      this.userName = seller.name;
    }
  }
  constructor(protected router: Router){}
  logout(){
    this.services.logout();
  }
}
