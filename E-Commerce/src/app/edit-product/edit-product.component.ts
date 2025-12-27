import { Component, inject } from '@angular/core';
import { product } from '../data-type';
import { SellerService } from '../services/seller.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  imports: [CommonModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent {

  sellerService = inject(SellerService);
  router = inject(Router);
  products:product[] = [];
  route = inject(ActivatedRoute);
  ngOnInit():void{
    this.sellerService.getProductById(this.route.snapshot.paramMap.get('id')).subscribe((res)=>{
        this.products.push(res);
    });
  }

  EditProduct(id:string|null|undefined){
    this.router.navigate(['edit-product',id]);
  }

  DeleteProduct(){
  }
}
