import { Component, Input, OnInit } from '@angular/core';
import { Ride } from 'src/shared/models/ride.model';

@Component({
  selector: 'app-ride-card',
  templateUrl: './ride-card.component.html',
  styleUrls: ['./ride-card.component.scss']
})
export class RideCardComponent implements OnInit {

  @Input() ride: Ride = {
    title: 'Naam van rit',
    description: 'Dit is de beschrijving van de rit',
    distance: 0
  };

  constructor() { }

  ngOnInit(): void {
  }

}
