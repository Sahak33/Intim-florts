import React from 'react';
import { Box } from '@mui/material';
import './CardForm.scss';

const CardForm = ({ children, renderStepper, renderProgressBar }) => {
	return (
		<Box className='card-form'>
			<Box className='card-form__heading'>
				{renderStepper?.()}
				{renderProgressBar?.()}
			</Box>
			<Box className='card-form__inner'>{children}</Box>
			<Box className='card-form__line'></Box>
			<p className='card-form__footer'>
				Already have an account?<a href='#'>Log In</a>
			</p>
		</Box>
	);
};

export default CardForm;
