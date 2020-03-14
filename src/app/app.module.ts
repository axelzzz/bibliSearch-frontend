import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book/book.component';

const appRoutes: Routes = [
  { 
    path: '',
    redirectTo: '/search',
    pathMatch: 'full'
  },
  {
    path: 'search',
    component: MainComponent,
    pathMatch: 'full'
  },
  {
    path: 'book-content',
    component: BookComponent,
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    NgxSmartModalModule.forRoot(),
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
