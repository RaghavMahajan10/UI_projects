import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';


import { CookieService } from 'ngx-cookie-service';
import lscache from 'lscache';
@Injectable()
export class ApiTokenService {
  private logged = new ReplaySubject<boolean>(1);
  isLogged = this.logged.asObservable();

  constructor(private httpClient: HttpClient,private _cookieService: CookieService) { 
    let token = lscache.get("starter-kitToken");
    if (token) {
      if (this.isTokenExpired(token)) {
        this.getAPIToken();
      }
    } else {
      this.getAPIToken();
    }
  }

  isTokenExpired(token: string): boolean {
    if (token) {
      const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
      return (Math.floor((new Date).getTime() / 1000)) >= expiry;
    } else {
      return true;
    }
  }

  async getAPIToken() {
    lscache.remove('starter-kitToken');
    // this.getAPITokenDetails().subscribe(
    //   (tokenResponse) => {
    //     if(tokenResponse && tokenResponse.access_token){
    //       lscache.set('starter-kitToken', tokenResponse.access_token);
    //     }
    //     this.logged.next(true);
    //   },
    //   (error: Response) => {
    //     console.log(error);
        
    //   }
    //);
  }

  checkStatus() {
    let token = lscache.get('starter-kitToken');
    if (token) {
      this.logged.next(true);
    } else {
      this.logged.next(false);
    }
  }

  // getAPITokenDetails(): Observable<any> {
  //   var formData = new FormData();
  //   // formData.append("client_id", environment.serviceClientID);
  //   // formData.append("client_secret", environment.serviceClientSecret);
  //   let ssotoken = this._cookieService.get('ssotoken');
  //   formData.append('ssotoken', ssotoken);
  //   //formData.append('ssotoken', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6InlFVXdtWFdMMTA3Q2MtN1FaMldTYmVPYjNzUSJ9.eyJhdWQiOiJmYmU2ODdlNS1iYTkwLTQ3MmEtYjM0My1lMjUwNDZkNmQzMGQiLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vNDU3ZDU2ODUtMDQ2Ny00ZDA1LWIyM2ItOGY4MTdhZGRhNDdjL3YyLjAiLCJpYXQiOjE3NjE1ODc3MjQsIm5iZiI6MTc2MTU4NzcyNCwiZXhwIjoxNzYxNTkxNjI0LCJhaW8iOiJBYlFBUy84YUFBQUErMEFuUDJHbzBzbldxbkJTS3ErVUsvd0FVaW9XOEdHWGxXRXN1SWxUSUNZeDZkcjcyV3J1QzBsTUtTaFM0NVY0Sm0rN0xPT0IrdGV0T3R6MFZ4enlYYmswNExyV0VZUU5BbUUyUEZxU2diZUpSRTg1VXhoVUlXZHFIV3EzK0taRm9BWUpZTXhFZUR3NTRJYTdUcEVMZjJ2Y3JkRExQTmRDSkdodmgvbmF1QkNaMFJHUFQvZTZza2s3Q05yNUhDUFBnUEN5Q2xWVjBqdnIzZ0cwdHhqR2NjZncrUGxiaTNkUkNtZ0xDMEIyRTd3PSIsImNjIjoiQ21BMytEaUpiUVJ2dVkrUEd0M3lxdlBnblZ5d1RBQkJVdGZpRTJTZmxVM2RPZ3YwTEIyQUQ4TjlTSnpqQ2RxamQwOERpWWo3UjR2TVJzbE9uSGF4L2FqTngwRXk5Y2hTWXdJUlhHdis4Szd5Y3Z3Y1U0VUtSMkNMSkZ1bk5aNklKTElTQ1dsdVptOXlMbU52YlJvU0NoRFc3dWcxMnh1L1E1UU9BMGRPL1YrOUloSUtFSCtHdjRzc0NHZE9wa2dMRXh0YVdRQXlBazVCT0FGQ0NRbUFmVFVXSE5MZFNFb0pDWUQ5WXYvVUdONUkiLCJub25jZSI6ImluZm9yMzYwIiwicmgiOiIxLkFRY0FoVlo5UldjRUJVMnlPNC1CZXQya2ZPV0g1dnVRdWlwSHMwUGlVRWJXMHcwSEFKd0hBQS4iLCJzdWIiOiJSTElEV3R6cHk1TzlhWGxOVmlBVUcyMlNUdHRKdURSVDFpSHJlMmk2WHcwIiwidGlkIjoiNDU3ZDU2ODUtMDQ2Ny00ZDA1LWIyM2ItOGY4MTdhZGRhNDdjIiwidXRpIjoiZjRhX2l5d0laMDZtU0FzVEcxcFpBQSIsInZlciI6IjIuMCIsIk5UTG9naW4iOiJhcGFuZGV5NiIsIkhDTUlEIjoiMTI4Njk2IiwiZGlzcGxheU5hbWUiOiJBc2hvayBQYW5kZXkiLCJkZXBhcnRtZW50IjoiSW5mb3JtYXRpb24gVGVjaG5vbG9neSIsInVzZXJQcmluY2lwYWxOYW1lIjoiYXNob2sucGFuZGV5QGluZm9yLmNvbSJ9.czyWkLAnR3mPfhqwIHeAqTQxN74wXVz4YesNNeZvqqSzkK7CSQ0wonLbvT7yY6jQdH8FU39IJIWk1flSdx-A9C3GC1RcmbIV5PrRiePQxCkfUNw5QYNoeuen8wBb8c2xj9Nf_KPjdbpFdwSKktLAf_yCD_mFE5ipyApMFQl7mpyt96NlcFaWE4vXMFWT4DgfRmBKZ8SNjHQhyveXAt3usd4cyfPma8tab6f76mALaFctsfm5a-L6H0xBdcvnN_VdLygBPG0cn-z1P1B2x6s0XB-5qX633PV3ym2QBSFiCjQHB2y1nvPJ_yoHt9YQ6tZC0C7jIMnllf1MyDIY_DJbOQ');
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Access-Control-Allow-Origin': '*'
  //     })
  //   };
  //   return this.httpClient
  //     .post<any>(environment.serviceTokenURL, formData, httpOptions)
  //     .pipe(
  //       retry(0),
  //       catchError(this.handleError),
  //       map((response: Response) => response)
  //     );
  // }


  /** This method will be called on error or exception.
  * 
  * @param error  Error instance.
  */
  handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => error.status);
  }
}
