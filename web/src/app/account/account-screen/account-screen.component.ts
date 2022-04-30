import { Component, OnInit } from '@angular/core';
import { DataStorageService } from 'src/shared/Services/data-storage.service';

@Component({
  selector: 'app-account-screen',
  templateUrl: './account-screen.component.html',
  styleUrls: ['./account-screen.component.scss']
})
export class AccountScreenComponent implements OnInit {
  public email: string = '';

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
    this.getEmail();
  }

  private getEmail() {
    let email = this.dataStorageService.getStoredData('user_email');
    email = email === null ? 'No email found!' : email;
    this.email = email;
  }

}
