import { LoginModule } from './login/login.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/shared/shared.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LogoBannerComponent } from 'src/shared/components/logo-banner/logo-banner.component';
import { RidesModule } from './rides/rides.module';

@NgModule({
  declarations: [
    AppComponent,
    LogoBannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoginModule,
    RidesModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
