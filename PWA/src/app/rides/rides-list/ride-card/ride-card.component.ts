import { Component, Input, OnInit } from '@angular/core';
import { Ride } from 'src/shared/models/ride.model';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/shared/components/confirm-dialog/confirm-dialog.component';

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

  constructor(public dialog: MatDialog) { }

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

  openConfirmDialog(): void {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { title: `${this.ride.title} verwijderen?`, message: `Weet u zeker dat u ${this.ride.title} wilt verwijderen?`, name: "Verwijderen"}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // delete ride
      }
    })
  }

}
