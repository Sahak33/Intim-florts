import { configureStore } from '@reduxjs/toolkit';
import appSlice from 'store/app/appSlice';

export const store = configureStore({
	reducer: {
		app: appSlice,
	},
});
