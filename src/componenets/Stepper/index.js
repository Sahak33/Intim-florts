import React from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import { appSelector } from 'helpers/reduxSelectors';
import { ReactComponent as Cake } from 'assets/images/icons/cake.svg';
import { ReactComponent as Couple } from 'assets/images/icons/couple.svg';
import { ReactComponent as Heart } from 'assets/images/icons/heart.svg';
import { ReactComponent as Location } from 'assets/images/icons/location.svg';
import { ReactComponent as Lock } from 'assets/images/icons/lock.svg';
import { ReactComponent as Message } from 'assets/images/icons/message.svg';
import { ReactComponent as Target } from 'assets/images/icons/target.svg';
import { ReactComponent as User } from 'assets/images/icons/user.svg';
import './Stepper.scss';

export const STEPS = [
	<Heart />,
	<Couple />,
	<Target />,
	<Cake />,
	<Location />,
	<User />,
	<Lock />,
	<Message />,
];

const Stepper = () => {
	const { step: page } = useSelector(appSelector);

	return (
		<Box className='stepper'>
			{STEPS.map((step, idx) => (
				<div key={idx} className={`${page > idx ? 'yellow' : ''} ${page === idx ? 'red' : ''}`}>
					{step}
				</div>
			))}
		</Box>
	);
};

export default Stepper;
