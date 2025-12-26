import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { product, seller } from '../data-type';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class SellerService {
  user?: seller;
  obs$?: Observable<seller[]>;
  constructor(private http: HttpClient, private router: Router) {}

  createSeller(data: seller) {
    return this.http.post('http://localhost:3000/users', data);
  }

  getData() {
    return this.http.get<seller[]>('http://localhost:3000/users');
  }
  result = new BehaviorSubject<boolean>(false);

  loginSeller(data: seller) {
    this.obs$ = this.getData();
    this.obs$?.subscribe((res) => {
      res.forEach((element) => {
        if (
          element.email === data.email &&
          element.password === data.password
        ) {
          this.result.next(true);
          localStorage.setItem('seller', JSON.stringify(element));
          this.router.navigate(['seller-home']).then(() => {
            window.location.reload();
          });
        } else {
          this.result.next(false);
        }
      });
    });
  }

  reloadSeller() {
    if (localStorage.getItem('seller')) {
      this.result.next(true);
      this.router.navigate(['seller-home']);
    } else {
      this.router.navigate(['seller-login']);
    }
  }
  exists = false;

  checkExistenceCustomer(
    email: string | null | undefined
  ): Observable<boolean> {
    return this.getData().pipe(
      map((res) => res.some((user) => user.email === email))
    );
  }

    logout(){
    localStorage.removeItem('seller');
    this.router.navigate(['']).then(() => {
      window.location.reload();
    });
  }

  addproduct(data:product){
    return this.http.post('http://localhost:3000/products',data);
  }

  getProducts(){
    return this.http.get<product[]>('http://localhost:3000/products');
  }
}
