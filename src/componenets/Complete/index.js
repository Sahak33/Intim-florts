import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CryptoJS from 'crypto-js';
import { signUp } from 'store/app/thunks';
import { appSelector } from 'helpers/reduxSelectors';

const Complete = () => {
	const { password, DOB, location, gender, looking_for } = useSelector(appSelector);

	const dispatch = useDispatch();

	const handleClick = () => {
		const completedData = {
			password: JSON.parse(
				CryptoJS.AES.decrypt(password, process.env.REACT_APP_BASE_URL).toString(CryptoJS.enc.Utf8)
			),
			email: 's.iskanian33@gmail.com',
			DOB,
			location,
			gender,
			looking_for,
		};

		dispatch(signUp(completedData));
	};
	return (
		<div>
			<button onClick={handleClick}>complete</button>
		</div>
	);
};

export default Complete;
