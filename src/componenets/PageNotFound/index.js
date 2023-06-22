import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import notFound from 'assets/images/not_found.jpg';
import './PageNotFound.scss';

const PageNotFound = () => {
	const navigate = useNavigate();

	const handleBack = () => {
		navigate('/');
	};

	return (
		<Box className='not-found'>
			<Box className='not-found__img'>
				<img src={notFound} alt='not found' />
			</Box>
			<h3>Oops! It looks like we can’t find that page</h3>
			<button className='btn-back' onClick={handleBack}>
				Back
			</button>
		</Box>
	);
};

export default PageNotFound;
