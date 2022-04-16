export class Filter {
	name: string;
	description: string;
	icon: string = 'import_export';

	constructor(name: string, description: string) {
		this.name = name;
		this.description = description;
	}
}
