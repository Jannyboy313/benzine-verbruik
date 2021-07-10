import { Component, Input, OnInit } from '@angular/core';
import { Ride } from 'src/shared/models/ride.model';
import Dialog from '@bit/mui-org.material-ui.dialog';
import MuiDialogTitle from '@bit/mui-org.material-ui.dialog-title';

import * as moment from 'moment';

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

  formatDate(date: Date | undefined) {
    moment.locale('nl');
    let formattedDate = moment(date).format('ddd DD MMM YYYY HH:mm'); // Woe 17 Mrt 2021 14:31
    return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1).replace(/\./g, "");
  }

  showDot(size: number): boolean {
    const wordCount = this.ride.description.split(' ').length;
    if (wordCount < 10 * size) {
      return false;
    }
    return true;
  }

}
