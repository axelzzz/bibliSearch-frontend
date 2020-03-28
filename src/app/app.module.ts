import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { Routes, RouterModule, RouteReuseStrategy } from '@angular/router';
import { BookComponent } from './book/book.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CustomReuseStrategy } from './strategy/CustomReuseStrategy';

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
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatCheckboxModule,
    FormsModule,
    NgxSpinnerModule
  ],
  providers: [BookComponent, MainComponent,
    { provide: RouteReuseStrategy, useClass: CustomReuseStrategy}          
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
