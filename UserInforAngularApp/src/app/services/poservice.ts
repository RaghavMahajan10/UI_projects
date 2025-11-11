
import { of, Observable,throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError, map } from 'rxjs/operators';
import {
  SohoDataGridService
} from 'ids-enterprise-ng';
import { environment } from '../../environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { jwtDecode } from 'jwt-decode';
import { PONotifications } from '../model/ponotification';
import { Router } from '@angular/router';
@Injectable()
export class poservice  {
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials':'true',
      'Accept': 'multipart/form-data'
    })
  };

  private columns: Array<SohoDataGridColumn> = Array<SohoDataGridColumn>();
  
  public data: Array<any> = Array<any>();
   ntLogin: any;
   userName:any;
   hcmId:any;
   email:any;
  public addColumn(column: SohoDataGridColumn) {
    this.getColumns().unshift(column);
  }

  constructor(private httpClient: HttpClient, private cookieService: CookieService ) {
    this.extractAccessToken();
    // if (this.cookieService.check('ntLogin')) {
    //   this.ntLogin = this.cookieService.get("ntLogin");
    // }
    // if(environment.debug){
    //   this.ntLogin="vyerramreddy";
    // }
  }


  extractAccessToken() {
    let ssotoken = this.cookieService.check("ssotoken") ? this.cookieService.get("ssotoken") : "";
    const tokenInfo = this.getDecodedAccessToken(ssotoken); // decode token
    this.ntLogin = (ssotoken == "" ? 'apandey6' : tokenInfo.NTLogin);
    this.email = (ssotoken == "" ? 'ashok.pandey@infor.com' : tokenInfo.userPrincipalName);
    this.hcmId = (ssotoken == "" ? 109095 : tokenInfo.HCMID);
    this.userName = (ssotoken == "" ? "Ashok Pandey" : tokenInfo.displayName);
 
  }
  getDecodedAccessToken(token: string): any {
    try {
      return jwtDecode(token);
    } catch (Error) {
      return null;
    }
  }
  getColumns(): Array<SohoDataGridColumn> {
    if (this.columns.length === 0) {
      this.init();
    }
    return this.columns;
  }


  getUserMenus(userid: any, appID: any): Observable<any> {
  
    return this.httpClient.get(environment.baseurl + '/GetMenu?userID=' + userid,{withCredentials:true});
  }


   getpovendorcontacts(): Observable<any> {
  
    return this.httpClient.get(environment.baseurl + '/GetPOVendorContacts',{withCredentials:true});
  }

  getrequestvendor(): Observable<any> {
  
    return this.httpClient.get(environment.baseurl + '/GetRequestVendor',{withCredentials:true});
  }


  getregion(): Observable<any> {
  
    return this.httpClient.get(environment.baseurl + '/GetRegions',{withCredentials:true});
  }



  getpopulatePOvendoredit(recId: any): Observable<any> {
  
    return this.httpClient.get(environment.baseurl + "/GetPopulatePOVendorEdit?recordID=" + recId,{withCredentials:true});
  }

  setponotifications(ponotificationss: PONotifications[]): Observable<any> {
      // const token =  localStorage.getItem("ponotificationsToken");
      // const headers = new HttpHeaders({
      //   'Authorization': `Bearer ${token}`
      // });
      
      
      return this.httpClient.post(environment.baseurl + '/SetPOnotifications',ponotificationss, {withCredentials:true})
        .pipe(
          catchError((error) => {
            console.error('API call failed (401 Unauthorized), using mock data:', error);
            return throwError(() => error);
          })
        );
}


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
 
  
  init() {
    this.columns =PAGING_COLUMNS;
    
  }
  onActionHandler(a: any) {
    console.warn(a.text());
  }

   
}
 

 export const PAGING_COLUMNS: SohoDataGridColumn[] = [
   { id: 'po_vendor', name: 'PO Vendor', field: 'poVendor', filterType: 'text', sortable: true, formatter: Soho.Formatters.Readonly, width: 300},
      { id: 'email', name: 'Email', field: 'email', filterType: 'text', sortable: true, formatter: Soho.Formatters.Readonly, width: 300},
      { id: 'inserted_by', name: 'Inserted By', field: 'insertedBy', filterType: 'text', sortable: true, formatter: Soho.Formatters.Readonly, width: 200},
      { id: 'inserted_date', name: 'Inserted Date', field: 'insertedDate', filterType: 'date', sortable: true, formatter: Soho.Formatters.Date, width: 150},
      {
        id: 'button-formatter', name: 'Delete',  sortable: false, icon: 'delete', align: 'left', formatter: Soho.Formatters.Button, width: 75,
            click: async (e: any, args: any) => {
             // this.deleteRequestNotification(args);
          }
      },
      {
        id: 'button-formatter', name: 'Edit',  sortable: false, icon: 'edit', align: 'left', formatter: Soho.Formatters.Button, width: 75,
            click: (e: any, args: any) => {
              // editVendor(args.row);
              //this.editVendor(args.row);
              // alert('Edit functionality is not implemented yet.');
          }
      }
  
];  