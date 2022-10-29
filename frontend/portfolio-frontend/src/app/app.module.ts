import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './modules/Login/components/sign-up/sign-up.component';
import { LoginComponent } from './modules/Login/components/login/login.component';
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
