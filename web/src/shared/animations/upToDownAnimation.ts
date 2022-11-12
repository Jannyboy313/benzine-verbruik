import {
	trigger,
	transition,
	style,
	animate,
	state
} from '@angular/animations';

export const upToDownAnimation = trigger('upToDown', [
	state(
		'*',
		style({
			opacity: 1,
			transform: 'translateY(0)'
		})
	),
	state(
		'void',
		style({
			opacity: 0,
			transform: 'translateY(-30%)'
		})
	),
	transition('void => *', [animate('400ms ease-in')]),
	transition('* => void', [animate('300ms ease-out')])
]);
