import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { Filter } from 'src/shared/models/filter.model';

@Component({
	selector: 'app-filter',
	templateUrl: './filter.component.html',
	styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit, OnChanges {
	private filterSettingsSubject: Subject<string> = new Subject<string>();
  @Input() filterShown: boolean = false;
  @Input() filters: Filter[] = [];

	constructor() {}

	ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
      this.filterShown = changes.filterShown.currentValue;
  }
}
