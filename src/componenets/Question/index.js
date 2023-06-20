import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';
import { MESSAGE_DIRECTION, STEP_QUESTION } from 'helpers/constants';
import { appSelector } from 'helpers/reduxSelectors';
import botAvatar from 'assets/images/bot-avatar.jpg';
import './Question.scss';

const Question = () => {
	const { step } = useSelector(appSelector);

	const handleSetPaddings = () => {
		return MESSAGE_DIRECTION[step] || '';
	};

	return (
		<Box className={`question ${handleSetPaddings()}`}>
			<Box className='question-bot'>
				<img src={botAvatar} alt='bot avatar' />
			</Box>
			<Box className='question-message'>
				<Typography className='question-message__text'>{STEP_QUESTION[step]}</Typography>
			</Box>
		</Box>
	);
};

export default Question;
