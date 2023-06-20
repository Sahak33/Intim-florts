import React from 'react';
import { Box } from '@mui/material';
import './CardForm.scss';

const CardForm = ({ children, renderStepper, renderProggressBar }) => {
	return (
		<Box className='card-form'>
			<div className='card-form__heading'>
				{renderStepper?.()}
				{renderProggressBar?.()}
			</div>
			<div className='card-form__inner'>{children}</div>
			<div className='card-form__line'></div>
			<p className='card-form__footer'>
				Already have an account?<a href='#'>Log In</a>
			</p>
		</Box>
	);
};

export default CardForm;
