import { LoginModule } from './login/login.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/shared/shared.module';
import { RidesModule } from './rides/rides.module';
import { FuelModule } from './fuel/fuel.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LogoBannerComponent } from 'src/shared/components/logo-banner/logo-banner.component';
import { BottomNavigationComponent } from 'src/shared/components/bottom-navigation/bottom-navigation.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
	declarations: [
		AppComponent,
		LogoBannerComponent,
		BottomNavigationComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		HttpClientModule,
		LoginModule,
		RidesModule,
		SharedModule,
		FuelModule,
		DashboardModule,
  ServiceWorkerModule.register('ngsw-worker.js', {
    enabled: environment.production,
    // Register the ServiceWorker as soon as the app is stable
    // or after 30 seconds (whichever comes first).
    registrationStrategy: 'registerWhenStable:30000'
  })
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
