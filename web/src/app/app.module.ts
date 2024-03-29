import { LoginModule } from './login/login.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/shared/shared.module';
import { RidesModule } from './rides/rides.module';
import { FuelModule } from './fuel/fuel.module';
import { AccountModule } from './account/account.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AppRoutingModule } from './app-routing.module';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppComponent } from './app.component';
import { LogoBannerComponent } from 'src/shared/components/logo-banner/logo-banner.component';
import { BottomNavigationComponent } from 'src/shared/components/bottom-navigation/bottom-navigation.component';

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
		AccountModule,
		DashboardModule,
		ScrollingModule
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
