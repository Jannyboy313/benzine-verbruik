import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountScreenComponent } from './account-screen/account-screen.component';

import { AccountRoutingModule } from './account-routing.module';
import { DataStorageService } from 'src/shared/Services/data-storage.service';

@NgModule({
	declarations: [AccountScreenComponent],
	imports: [CommonModule, AccountRoutingModule],
	providers: [DataStorageService]
})
export class AccountModule {}
