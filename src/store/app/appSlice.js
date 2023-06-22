import { createSlice } from '@reduxjs/toolkit';

import initialState from './initialState';
import { createUsername, fetchLocations, signUp } from './thunks';

const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		chooseInteresting: (state, { payload }) => {
			if (state.interest !== payload) {
				state.interest = payload;
			}
			state.step += 1;
		},
		back: state => {
			if (state.step === 2) {
				state.gender = null;
			}
			if (state.step === 3) {
				state.looking_for = null;
			}
			if (state.step === 4) {
				state.DOB = null;
				state.locations = [];
				state.location = '';
			}
			if (state.step === 5) {
				state.locations = [];
				state.location = '';
			}
			if (state.step === 6) {
				state.userId = null;
			}
			if (state.step === 7) {
				state.password = null;
			}
			state.error = '';
			state.step -= 1;
		},
		setGender: (state, { payload }) => {
			if (state.step === 1) {
				state.gender = payload;
			}
			if (state.step === 2) {
				state.looking_for = payload;
			}
			state.step += 1;
		},
		setBirthday: (state, { payload }) => {
			state.DOB = payload;
			state.step += 1;
		},
		chooseLocation: (state, { payload }) => {
			state.location = payload;
		},
		setPassword: (state, { payload }) => {
			state.password = payload;
			state.step += 1;
		},
		cleanLocations: state => {
			state.locations = [];
		},
		next: state => {
			state.step += 1;
		},
	},
	extraReducers: {
		[createUsername.pending]: state => {
			state.loading = true;
		},
		[createUsername.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.userId = payload;
			state.step += 1;
			state.error = '';
		},
		[createUsername.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		[fetchLocations.pending]: state => {
			state.loading = true;
		},
		[fetchLocations.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.locations = payload;
			state.error = '';
		},
		[fetchLocations.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		[signUp.pending]: state => {
			state.loading = true;
		},
		[signUp.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.DOB = payload?.DOB;
			state.email = payload?.email;
			state.gender = payload?.gender;
			state.looking_for = payload?.looking_for;
			state.username = payload?.username;
			state.userId = payload?._id;
			state.error = '';
		},
		[signUp.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
	},
});

export const {
	chooseInteresting,
	next,
	back,
	setGender,
	setBirthday,
	chooseLocation,
	setPassword,
	cleanLocations,
} = appSlice.actions;
export default appSlice.reducer;
