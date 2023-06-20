export const generateDays = () => {
	const days = [];
	for (let i = 1; i <= 31; i++) {
		days.push(i);
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
