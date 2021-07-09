import { Component, OnInit } from '@angular/core';
import { RideService } from 'src/shared/Services/db/ride.service';
import { Ride } from 'src/shared/models/ride.model';

@Component({
  selector: 'app-rides-list',
  templateUrl: './rides-list.component.html',
  styleUrls: ['./rides-list.component.scss']
})
export class RidesListComponent implements OnInit {

  isLoading: boolean = true;
  rides: Ride[] = [];

  constructor(private rideService: RideService) { }

  ngOnInit(): void {
    this.getRides();
  }

  getRides() {
    this.isLoading = true;
    this.rideService.getRides()
    .subscribe(
      result => {
        this.isLoading = false;
        this.rides = result;
      },
      err => {
        this.isLoading = false;
      }
    )
  }

  ridesExist(): boolean {
    if (this.rides.length > 0) {
      return true;
    }
    return false;
  }

}
