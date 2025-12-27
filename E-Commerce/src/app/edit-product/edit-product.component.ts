import { Component, inject } from '@angular/core';
import { product } from '../data-type';
import { SellerService } from '../services/seller.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-product',
  imports: [CommonModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent {

  sellerService = inject(SellerService);
  products:product[] = [];

  ngOnInit():void{
    this.sellerService.getProducts().subscribe((res)=>{
      res.forEach(element =>{
        this.products.push(element);
      });
    });
  }

  EditProduct(){
  }

  DeleteProduct(){
  }
}
