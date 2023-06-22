import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Box } from '@mui/material';
import Back from 'componenets/Back';
import Button from 'componenets/common/Button';
import CryptoJS from 'crypto-js';
import { setPassword } from 'store/app/appSlice';
import { VALIDATION_MESSAGES } from 'helpers/constants';
import './Password.scss';

const { FIELD_IS_REQUIRED, PASSWORD_REQUIREMENT } = VALIDATION_MESSAGES;

const Password = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({ mode: 'onChange' });

	const dispatch = useDispatch();

	useEffect(() => {
		const subscription = watch(v => v);
		return () => subscription.unsubscribe();
	}, [watch]);

	const onSubmit = data => {
		let ciphertext = CryptoJS.AES.encrypt(
			JSON.stringify(data.password),
			process.env.REACT_APP_BASE_URL
		).toString();
		dispatch(setPassword(ciphertext));
	};

	return (
		<form className='password' onSubmit={handleSubmit(onSubmit)}>
			<p className='description'>More than 6 characters. Includes at least 1 number</p>
			<input
				className='text-field'
				type='password'
				placeholder='Password'
				{...register('password', {
					required: FIELD_IS_REQUIRED,
					pattern: {
						message: PASSWORD_REQUIREMENT,
						value: /^(?=.*\d).{6,16}$/,
					},
				})}
			/>
			{errors.password && <p id='error'>{errors.password?.message}</p>}
			<Button title='Next' />
			<Box className='back'>
				<Back />
			</Box>
		</form>
	);
};

export default Password;
