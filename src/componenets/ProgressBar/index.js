import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, LinearProgress } from '@mui/material';
import { appSelector } from 'helpers/reduxSelectors';
import './ProgressBar.scss';

const ProgressBar = () => {
	const [progress, setProgress] = useState(0);
	const { step } = useSelector(appSelector);

	useEffect(() => {
		switch (step) {
			case 0:
				setProgress(2);
				break;
			case 1:
				setProgress(16);
				break;
			case 2:
				setProgress(30);
				break;
			case 3:
				setProgress(45);
				break;
			case 4:
				setProgress(58);
				break;
			case 5:
				setProgress(72);
				break;
			case 6:
				setProgress(85);
				break;
			case 7:
				setProgress(100);
				break;
		}
	}, [step]);
	//const progress = Number(((step + 1) * (100 / 9)).toFixed(2));
	return (
		<Box>
			<LinearProgress variant='determinate' value={progress} />
		</Box>
	);
};

export default ProgressBar;
