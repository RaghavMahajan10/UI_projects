import { Component, inject } from '@angular/core';
import { product } from '../data-type';
import { SellerService } from '../services/seller.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  sellerService = inject(SellerService);
  products:product[] = [];
  pageSize = 8;
  currentPage = 1;

  constructor() {
    console.log(this.products);
  }
  ngOnInit():void{
    this.sellerService.getProducts().subscribe((res)=>{
        res.forEach(element =>{
          this.products.push(element);
        });
    });
  }

  productsSlice(){
    return this.products.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize);
  }

  addToCart(id:string|any|undefined){
    console.log(id);
  }


  previousPage(){
    this.currentPage--;
  }

  nextPage(){
    this.currentPage++;
  }
}
