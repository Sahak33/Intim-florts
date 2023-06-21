import { createAsyncThunk } from '@reduxjs/toolkit';
import { getLocations } from 'services/location-service';
import { register, username } from 'services/user-service';

export const createUsername = createAsyncThunk(
	'app/createUsername',
	async (data, { rejectWithValue }) =>
		username(data)
			.then(({ data: { Data } }) => {
				localStorage.setItem('user_id', Data);
				return Data;
			})
			.catch(e => {
				console.log(e, 'errorrrrr username');
				return rejectWithValue(e.response.data.message);
			})
);

export const fetchLocations = createAsyncThunk(
	'app/fetchLocations',
	async (search, { rejectWithValue }) =>
		getLocations({ params: { search } })
			.then(({ data: { Data } }) => Data)
			.catch(e => {
				console.log(e, 'error locations');
				return rejectWithValue(e.message);
			})
);

export const signUp = createAsyncThunk('app/signUp', async (data, { rejectWithValue }) =>
	register(data)
		.then(({ data }) => {
			console.log(data, 'data');
		})
		.catch(e => {
			console.log(e, 'errorrrrr create user');
			return rejectWithValue(e.response.data.message);
		})
);
