import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  matchPasswordValidator,
  passwordStrengthValidator,
} from '../custom-validator/custom_Validator';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { seller } from '../data-type';
@Component({
  selector: 'app-selling-auth',
  imports: [ReactiveFormsModule],
  templateUrl: './selling-auth.component.html',
  styleUrl: './selling-auth.component.css',
})
export class SellingAuthComponent {
  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [
      Validators.required,
      passwordStrengthValidator,
    ]),
    repassword: new FormControl('', [
      Validators.required,
      matchPasswordValidator('password'),
    ]),
  });
  constructor(private sellerService: SellerService, private router: Router) {}
  nameControl: FormControl = this.form.get('name') as FormControl;
  emailControl: FormControl = this.form.get('email') as FormControl;
  passwordControl: FormControl = this.form.get('password') as FormControl;
  repasswordControl: FormControl = this.form.get('repassword') as FormControl;

  signUp(data: seller) {
    this.sellerService
      .checkExistenceCustomer(data.email)
      .subscribe((exists) => {
        if (exists) {
          alert('Email already exists. Please use a different email.');
          return;
        }
        this.sellerService.createSeller(data).subscribe((res) => {
          console.log('Service Completed');
        });
        alert('Sign Up Successful');
        this.router.navigate(['']).then(() => {
          window.location.reload();
        });
      });
  }

  openLogin() {
    this.router.navigate(['seller-login']);
  }

}
