import React from 'react';
import { Box } from '@mui/material';
import CardForm from 'componenets/Card';
import Footer from 'componenets/Footer';
import ProgressBar from 'componenets/ProgressBar';
import Question from 'componenets/Question';
import Register from 'componenets/Register';
import Stepper from 'componenets/Stepper';
import './SignUp.scss';

const SignUp = () => (
	<>
		<Box className='home'>
			<CardForm renderStepper={() => <Stepper />} renderProgressBar={() => <ProgressBar />}>
				<Question />
				<Register />
			</CardForm>
		</Box>
		<Footer />
	</>
);

export default SignUp;
