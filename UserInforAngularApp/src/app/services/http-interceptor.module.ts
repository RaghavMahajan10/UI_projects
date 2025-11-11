import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { HTTP_INTERCEPTORS, HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import lscache from 'lscache';
@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    const token = lscache.get('starter-kitToken');
    const checkAuthHeader = req.headers.get('Authorization');
    if (token && !checkAuthHeader) {
      console.log(req);
      if(!req.url.includes("v1/TokenProvider"))
      {
      const newReq = req.clone({
        headers: req.headers.set('Authorization',
          'Bearer ' + token)
      });

      return next.handle(newReq);
    } else{
      return next.handle(req);
    }
    }
    else {
      return next.handle(req);
    }
  }
};

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true
    }
  ]
})
export class HttpInterceptorModule { }
