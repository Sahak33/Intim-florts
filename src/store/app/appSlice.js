import { createSlice } from '@reduxjs/toolkit';

import initialState from './initialState';

const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		chooseInteresting: (state, { payload }) => {
			state.interest = payload;
			state.step += 1;
		},
		back: state => {
			if (state.step === 1) {
				state.interest = '';
			}
			if (state.step === 2) {
				state.gender = null;
			}
			if (state.step === 3) {
				state.seeking = null;
			}
			if (state.step === 4) {
				state.birthday = null;
			}
			if (state.step === 5) {
				state.location = null;
			}

			state.step -= 1;
		},
		setGender: (state, { payload }) => {
			if (state.step === 1) {
				state.gender = payload;
			}
			if (state.step === 2) {
				state.seeking = payload;
			}
			state.step += 1;
		},
		setBirthday: (state, { payload }) => {
			state.birthday = payload;
			state.step += 1;
		},
		chooseLocation: (state, { payload }) => {
			state.location = payload;
			state.step += 1;
		},
		setUsername: (state, { payload }) => {
			state.username = payload;
			state.step += 1;
		},
	},
});

export const { chooseInteresting, back, setGender, setBirthday, chooseLocation, setUsername } =
	appSlice.actions;
export default appSlice.reducer;
