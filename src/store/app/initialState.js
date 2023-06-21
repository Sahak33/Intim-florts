const initialState = {
	loading: false,
	interest: '',
	step: 0,
	gender: null,
	looking_for: null,
	DOB: null,
	locations: [],
	location: '',
	userId: localStorage.getItem('user_id') || null,
	username: '',
	password: null,
	error: '',
};

export default initialState;
