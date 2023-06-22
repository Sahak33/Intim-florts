import React from 'react';
import { NavLink } from 'react-router-dom';
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
				Already have an account?<NavLink to=''>Log In</NavLink>
			</p>
		</Box>
	);
};

export default CardForm;
