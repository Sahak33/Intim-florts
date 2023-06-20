import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/material';
import OutlineButton from 'componenets/common/OutlineButton';
import { chooseInteresting } from 'store/app/appSlice';
import { DATING_REASONS } from 'helpers/constants';
import { appSelector } from 'helpers/reduxSelectors';
import './Interest.scss';

const Interest = () => {
	const { interest } = useSelector(appSelector);

	const dispatch = useDispatch();

	const handleActive = title => () => {
		dispatch(chooseInteresting(title));
	};
	return (
		<Box className='dating-reasons'>
			{DATING_REASONS.map(title => (
				<OutlineButton key={title} text={title} active={interest} onPress={handleActive(title)} />
			))}
		</Box>
	);
};

export default Interest;
