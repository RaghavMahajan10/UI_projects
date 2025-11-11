import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', redirectTo: 'data', pathMatch: 'full' },
  { path: 'home', component: AppComponent },  
//  { path: 'home', component: starter-kitMainComponent },
  
];

/**
 * To test the application using the hashing routing strategy, swap the two lines below.
 */
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  declarations: []
})
//export const AppRoutingModule: ModuleWithProviders<T> = RouterModule.forRoot(routes, { useHash: false });
export class AppRoutingModule { }
