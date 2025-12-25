import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { seller } from '../data-type';
@Injectable({
  providedIn: 'root',
})
export class SellerService {
  user?: seller;
  obs$?: Observable<seller[]>;
  constructor(private http: HttpClient) {}

  createSeller(data: seller) {
    return this.http.post('http://localhost:3000/users', data);
  }

  getData() {
    return this.http.get<seller[]>('http://localhost:3000/users');
  }
  result: boolean = false;
  loginSeller(data: seller): boolean {
    this.obs$ = this.getData();
    this.obs$?.subscribe((res) => {
      res.forEach((element) => {
        if (
          element.email === data.email &&
          element.password === data.password
        ) {
          this.result = false;
        } else {
          this.result = true;
        }
      });
    });
    return this.result;
  }
}
