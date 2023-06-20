import React from 'react';
import { useDispatch } from 'react-redux';
import { back } from 'store/app/appSlice';
import './Back.scss';

const Back = () => {
	const dispatch = useDispatch();
	const handleBack = () => {
		dispatch(back());
	};
	return (
		<button className='btn-link' onClick={handleBack}>
			Back
		</button>
	);
};

export default Back;
