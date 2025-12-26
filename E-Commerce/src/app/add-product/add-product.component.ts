import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { product } from '../data-type';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-add-product',
  imports: [ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {
  constructor(private sellerService: SellerService) {}
  addProductForm = new FormGroup({
    productName: new FormControl(''),
    category: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
    imageUrl: new FormControl(''),
  });

  selectedImageBase64!: string;
  onFileSelected(event: any) {
    const file = event.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      this.selectedImageBase64 = reader.result as string;
    };

    reader.readAsDataURL(file);
  }

  addproduct(data: product) {
    data.imageUrl = this.selectedImageBase64;
    this.sellerService.addproduct(data).subscribe((res) => {
      alert('Product Added Successfully');
      this.addProductForm.reset();
    });
  }
}
