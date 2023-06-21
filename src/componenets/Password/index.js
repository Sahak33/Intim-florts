import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import Back from 'componenets/Back';
import Button from 'componenets/common/Button';
import { VALIDATION_MESSAGES } from 'helpers/constants';
import './Password.scss';

const { FIELD_IS_REQUIRED } = VALIDATION_MESSAGES;

const Password = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: 'onChange' });

	const dispatch = useDispatch();

	const onSubmit = data => {};

	return (
		<form className='password' onSubmit={handleSubmit(onSubmit)}>
			<p>More than 6 characters. Includes at least 1 number</p>
			<input
				className='password-field'
				type='password'
				placeholder='Password'
				{...register('password', {
					required: FIELD_IS_REQUIRED,
				})}
			/>
			{errors.password && <p id='error'>{errors.password?.message}</p>}
			<Button title='Next' />
			<div className='password-back'>
				<Back />
			</div>
		</form>
	);
};

export default Password;
