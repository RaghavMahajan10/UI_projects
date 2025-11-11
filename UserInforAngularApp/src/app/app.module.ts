
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from "./app.routes";
import { AppComponent } from './app.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AppEncrypt } from './services/app.encrypt';
import { ApiTokenService } from './services/apitoken.service';
import { HttpInterceptorModule } from './services/http-interceptor.module';
import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [],
  imports: [
      BrowserModule,
      AppComponent,
      AppRoutingModule,      
      FormsModule,
      HttpInterceptorModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'en-US'
    },
    ApiTokenService,
    provideHttpClient(withInterceptorsFromDi()),
    AppEncrypt,
    CookieService,
  ],
  // bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  
})
export class AppModule {
 
 }
