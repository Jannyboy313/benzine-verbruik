export class Filter {
	name: string;
	description: string;
	icon: string = 'import_export';
	url: string = '';

	constructor(name: string, description: string) {
		this.name = name;
		this.description = description;
	}
}
