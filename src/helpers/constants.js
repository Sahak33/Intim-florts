import man from 'assets/images/man.jpg';
import sekking_man from 'assets/images/seeking_man.jpg';
import seeking_woman from 'assets/images/seeking_woman.jpg';
import woman from 'assets/images/woman.jpg';

export const FOOTER_LINKS = ['Terms', 'Policy', 'Cookie Policy', 'Help Center'];

export const DATING_REASONS = ['Casual Dating', 'Couple of Dates', 'Serious Relationship'];

export const STEP_QUESTION = [
	'What are you looking for?',
	'What is your gender?',
	'Who are you looking for?',
	'What is your age?',
	'What is your location',
	'Choose a username',
	'Set  your password',
	'Add your email address',
];

export const MESSAGE_DIRECTION = ['center', 'start', 'start', 'center', 'center', 'center'];

export const GENDER = [
	{ pole: 'man', img: man },
	{ pole: 'woman', img: woman },
];

export const SEEKING = [
	{ pole: 'man', img: sekking_man },
	{ pole: 'woman', img: seeking_woman },
];

export const MONTHS = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

export const VALIDATION_MESSAGES = {
	FIELD_IS_REQUIRED: 'This field is required',
};
