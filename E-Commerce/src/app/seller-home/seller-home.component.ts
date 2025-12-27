import { Component, inject } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { product } from '../data-type';
import { elementAt } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-home',
  imports: [CommonModule],
  templateUrl: './seller-home.component.html',
  styleUrl: './seller-home.component.css'
})
export class SellerHomeComponent {
  sellerService = inject(SellerService);
  products:product[] = [];

  router = inject(Router);

  ngOnInit():void{
    this.sellerService.getProducts().subscribe((res)=>{
      res.forEach(element =>{
        this.products.push(element);
      });
    }); 
  }

  handleImageError(event: any) {
    event.target.src = 'https://via.placeholder.com/300x300?text=No+Image';
  }

  viewProduct(id:string|any|undefined){
    this.router.navigate(['/product',id]);

  }
  deleteProduct(id:string|any|undefined){

  }
}
