import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import Back from 'componenets/Back';
import Button from 'componenets/common/Button';
import { setUsername } from 'store/app/appSlice';
import { VALIDATION_MESSAGES } from 'helpers/constants';
import './Username.scss';

const { FIELD_IS_REQUIRED } = VALIDATION_MESSAGES;

const Username = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: 'onChange' });

	const dispatch = useDispatch();

	const onSubmit = data => {
		dispatch(setUsername(data.username));
	};

	return (
		<form className='username' onSubmit={handleSubmit(onSubmit)}>
			<input
				className='username-field'
				type='text'
				placeholder='Username'
				{...register('username', {
					required: FIELD_IS_REQUIRED,
				})}
			/>
			{errors.username && <p id='error'>{errors.username?.message}</p>}
			<Button title='Next' />
			<div className='username-back'>
				<Back />
			</div>
		</form>
	);
};

export default Username;
