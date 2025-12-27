import { Component } from '@angular/core';
import { product } from '../data-type';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SellerService } from '../services/seller.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  imports: [ReactiveFormsModule],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css',
})
export class ProductEditComponent {
  addProductForm: FormGroup;
  constructor(
    private sellerService: SellerService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // Initialize form with empty values first
    this.addProductForm = new FormGroup({
      productName: new FormControl(''),
      category: new FormControl(''),
      price: new FormControl(''),
      description: new FormControl(''),
      imageUrl: new FormControl(''),
    });
    this.sellerService
      .getProductById(this.route.snapshot.paramMap.get('id'))
      .subscribe((res) => {
        console.log(res);
        this.addProductForm.patchValue({
          productName: res.productName,
          category: res.category,
          price: res.price,
          description: res.description,
          imageUrl: res.imageUrl,
        });
      });
  }

  editProduct(data: product) {
    this.sellerService
      .editProduct(data, this.route.snapshot.paramMap.get('id'))
      .subscribe((res) => {
        alert('Product Edited Successfully');
        this.router.navigate(['seller-home']).then(()=>{
          window.location.reload();
        });
      });
  }
}
