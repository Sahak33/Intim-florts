import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { formatter } from 'utils/helpers';
import { appSelector } from 'helpers/reduxSelectors';
import './Home.scss';

const Home = () => {
	const { DOB, email, gender, location, looking_for, username, userId } = useSelector(appSelector);
	const navigate = useNavigate();

	useEffect(() => {
		if (!userId) {
			navigate('/');
		}
	}, []);

	return (
		<div className='main'>
			<div className='main-inner'>
				<p className='description'>Date of Birthday: {formatter(DOB)}</p>
				<p className='description'>Email: {email}</p>
				<p className='description'>Gender: {gender}</p>
				<p className='description'>Location: {location}</p>
				<p className='description'>Looking for: {looking_for}</p>
				<p className='description'>Username: {username}</p>
				<p className='description'>User id: {userId}</p>
			</div>
		</div>
	);
};

export default Home;
