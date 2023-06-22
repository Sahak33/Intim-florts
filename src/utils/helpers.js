export const generateDays = () => {
	const days = [];
	for (let i = 1; i <= 31; i++) {
		if (i < 10) {
			days.push(`0${i}`);
		} else {
			days.push(i);
		}
	}
	return days;
};

export const generateYears = () => {
	const now = new Date().getFullYear();
	const years = [];
	for (let i = 1980; i <= now - 18; i++) {
		years.push(i);
	}
	return years;
};

export const progressBarCalc = step => {
	switch (step) {
		case 0:
			return 2;
		case 1:
			return 16;
		case 2:
			return 30;
		case 3:
			return 45;
		case 4:
			return 58;
		case 5:
			return 72;
		case 6:
			return 85;
		case 7:
			return 100;
	}
};

export const formatter = date => {
	return new Date(date).toLocaleDateString('en-GB', {
		day: '2-digit',
		month: 'short',
		year: 'numeric',
	});
};
