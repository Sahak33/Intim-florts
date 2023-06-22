import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, LinearProgress } from '@mui/material';
import { progressBarCalc } from 'utils/helpers';
import { appSelector } from 'helpers/reduxSelectors';

const ProgressBar = () => {
	const [progress, setProgress] = useState(0);
	const { step } = useSelector(appSelector);

	useEffect(() => {
		const calcedVal = progressBarCalc(step);
		setProgress(calcedVal);
	}, [step]);
	//const progress = Number(((step + 1) * (100 / 9)).toFixed(2));
	return (
		<Box>
			<LinearProgress variant='determinate' value={progress} />
		</Box>
	);
};

export default ProgressBar;
