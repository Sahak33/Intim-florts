import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/material';
import Back from 'componenets/Back';
import Button from 'componenets/common/Button';
import { createUsername } from 'store/app/thunks';
import { VALIDATION_MESSAGES } from 'helpers/constants';
import { appSelector } from 'helpers/reduxSelectors';
import './Username.scss';

const { FIELD_IS_REQUIRED, USERNAME_REQUIREMENT } = VALIDATION_MESSAGES;

const Username = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({ mode: 'onChange' });

	const { error } = useSelector(appSelector);

	const dispatch = useDispatch();

	useEffect(() => {
		const subscription = watch(v => v);
		return () => subscription.unsubscribe();
	}, [watch]);

	const onSubmit = data => {
		dispatch(createUsername({ username: data.username }));
	};

	return (
		<form className='username' onSubmit={handleSubmit(onSubmit)}>
			<input
				className='text-field'
				type='text'
				placeholder='Username'
				{...register('username', {
					required: FIELD_IS_REQUIRED,
					pattern: {
						message: USERNAME_REQUIREMENT,
						value: /^[a-zA-Z0-9_]{3,12}$/,
					},
				})}
			/>
			{errors.username && <p id='error'>{errors.username?.message}</p>}
			{error && <p id='error'>{error}</p>}
			<Button title='Next' />
			<Box className='back'>
				<Back />
			</Box>
		</form>
	);
};

export default Username;
