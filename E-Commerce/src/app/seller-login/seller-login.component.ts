import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { seller } from '../data-type';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-login',
  imports: [ReactiveFormsModule],
  templateUrl: './seller-login.component.html',
  styleUrl: './seller-login.component.css'
})
export class SellerLoginComponent {
    form = new FormGroup({
    email: new FormControl('', []),
    password: new FormControl('', [])
  })

  constructor(private sellerService:SellerService,private router: Router){}

  errorMsg:string='';
  ngOnInit(){
    this.sellerService.reloadSeller();
  }
  signIn(data:seller){
    this.sellerService.loginSeller(data);
    this.sellerService.result.subscribe((res)=>{
      if(!res){
        this.errorMsg="Please enter valid credentials"
      }     
    });
  }
}
