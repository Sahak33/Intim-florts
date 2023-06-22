import { createAsyncThunk } from '@reduxjs/toolkit';
import { getLocations } from 'services/location-service';
import { register, username } from 'services/user-service';

export const createUsername = createAsyncThunk(
	'app/createUsername',
	async (data, { rejectWithValue }) =>
		username(data)
			.then(({ data: { Data } }) => Data)
			.catch(e => rejectWithValue(e.response.data.Error.message))
);

export const fetchLocations = createAsyncThunk(
	'app/fetchLocations',
	async (search, { rejectWithValue }) =>
		getLocations({ params: { search } })
			.then(({ data: { Data } }) => Data)
			.catch(e => rejectWithValue(e.response?.data?.Error?.message))
);

export const signUp = createAsyncThunk('app/signUp', async (data, { rejectWithValue }) => {
	const { id, body } = data;
	return register(id, body)
		.then(({ data: { Data } }) => Data)
		.catch(e => rejectWithValue(e.response?.data?.Error?.message));
});
