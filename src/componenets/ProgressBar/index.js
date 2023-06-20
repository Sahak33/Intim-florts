import React from 'react';
import { useSelector } from 'react-redux';
import { Box, LinearProgress } from '@mui/material';
import { appSelector } from 'helpers/reduxSelectors';
import './ProgressBar.scss';

const ProgressBar = () => {
	const { step } = useSelector(appSelector);
	const progress = Number(((step + 1) * (100 / 9)).toFixed(2));
	return (
		<Box>
			<LinearProgress variant='determinate' value={progress} />
		</Box>
	);
};

export default ProgressBar;
