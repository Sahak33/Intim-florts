import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import Back from 'componenets/Back';
import Button from 'componenets/common/Button';
import Checkbox from 'componenets/common/Checkbox';
import CryptoJS from 'crypto-js';
import { signUp } from 'store/app/thunks';
import { VALIDATION_MESSAGES } from 'helpers/constants';
import { appSelector } from 'helpers/reduxSelectors';
import './Complete.scss';

const { FIELD_IS_REQUIRED, EMAIL_REQUIREMENT } = VALIDATION_MESSAGES;

const Complete = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({ mode: 'onChange' });
	const { password, DOB, location, gender, looking_for, userId, error } = useSelector(appSelector);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		const subscription = watch(v => v);
		return () => subscription.unsubscribe();
	}, [watch]);

	const onSubmit = data => {
		const completedData = {
			id: userId,
			body: {
				password: JSON.parse(
					CryptoJS.AES.decrypt(password, process.env.REACT_APP_BASE_URL).toString(CryptoJS.enc.Utf8)
				),
				email: data.email,
				DOB,
				location,
				gender,
				looking_for,
			},
		};

		dispatch(signUp(completedData))
			.unwrap()
			.then(() => {
				navigate('/home');
			})
			.catch(e => e);
	};

	return (
		<form className='complete' onSubmit={handleSubmit(onSubmit)}>
			<input
				className='text-field'
				type='text'
				placeholder='Email'
				{...register('email', {
					required: FIELD_IS_REQUIRED,
					pattern: {
						message: EMAIL_REQUIREMENT,
						value: /^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
					},
				})}
			/>
			{errors.email && <p id='error'>{errors.email?.message}</p>}
			<Checkbox
				label={
					<p>
						I have read and accept the <NavLink to=''>Terms of Service</NavLink> and our
						<NavLink to=''> Privacy Statement.</NavLink>
					</p>
				}
				register={register('agree', { required: FIELD_IS_REQUIRED })}
			/>

			{errors.agree && <p id='error'>{errors.agree?.message}</p>}
			{error && <p id='error'>{error}</p>}
			<Button title='Complete' />
			<Box className='back'>
				<Back />
			</Box>
		</form>
	);
};

export default Complete;
