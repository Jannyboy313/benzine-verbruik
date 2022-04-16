import {
	Component,
	Input,
	Output,
	OnChanges,
	OnInit,
	SimpleChanges,
	EventEmitter
} from '@angular/core';
import { Filter } from 'src/shared/models/filter.model';
import { FilterIconSettings } from 'src/shared/models/filter-icon-settings.model';

@Component({
	selector: 'app-filter',
	templateUrl: './filter.component.html',
	styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit, OnChanges {
	@Input() filterShown: boolean = false;
	@Input() filters: Filter[] = [];
	@Output() onFilterUrl: EventEmitter<string> = new EventEmitter<string>();

	private filterUrlSettings: Filter[] = [];

	private filterIconSettings: FilterIconSettings[] = [
		new FilterIconSettings('import_export', 'south', ''),
		new FilterIconSettings('south', 'north', 'desc'),
		new FilterIconSettings('north', 'import_export', 'asc')
	];

	constructor() {
		this.onFilterUrl.emit('');
	}

	ngOnInit(): void {}

	ngOnChanges(changes: SimpleChanges): void {
		this.filterShown = changes.filterShown.currentValue;
	}

	public filterClicked(index: number): void {
		const currentIcon: string = this.filters[index].icon;
		const filterIconSetting = this.findFilterIconSettings(currentIcon);
		this.filters[index].icon = filterIconSetting.nextIcon;
		this.filters[index].url = filterIconSetting.url;
		this.setFilterUrl(this.filters[index]);
	}

	private findFilterIconSettings(icon: string): FilterIconSettings {
		let returnValue: FilterIconSettings = new FilterIconSettings(
			'',
			'',
			''
		);
		this.filterIconSettings.forEach(element => {
			if (element.name === icon) {
				returnValue = element;
			}
		});
		return returnValue;
	}

	private setFilterUrl(filter: Filter) {
		this.removeFilterSetting(filter);
		if (filter.url !== '') {
			this.filterUrlSettings.push(filter);
		}

		let url = '';
		if (this.filterUrlSettings.length > 0) {
			url += 'filter=true';
			this.filterUrlSettings.forEach(element => {
				url += '&' + element.name + '=' + element.url;
			});
		}
		this.onFilterUrl.emit(url);
	}

	private removeFilterSetting(filter: Filter): void {
		var settingsCopy = this.filterUrlSettings;
		for (let i = 0; i < settingsCopy.length; i++) {
			if (settingsCopy[i] === filter) {
				delete this.filterUrlSettings[i];
				return;
			}
		}
	}
}
