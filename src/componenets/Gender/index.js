import React from 'react';
import { useDispatch } from 'react-redux';
import { Box } from '@mui/material';
import Back from 'componenets/Back';
import { setGender } from 'store/app/appSlice';
import './Gender.scss';

const Gender = ({ data, title }) => {
	const dispatch = useDispatch();

	const handleChooseGender = gender => () => {
		dispatch(setGender(gender));
	};

	return (
		<Box className='gender'>
			<div className='gender-inner'>
				{data.map(({ pole, img }) => (
					<Box className={pole} key={pole} onClick={handleChooseGender(pole)}>
						<img src={img} alt={pole} />
						<Box className='gender-inner__box'>
							<p>
								{title} {pole}
							</p>
						</Box>
					</Box>
				))}
			</div>
			<Back />
		</Box>
	);
};

export default Gender;
