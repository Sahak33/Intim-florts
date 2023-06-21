import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import Age from 'componenets/Age';
import CardForm from 'componenets/Card';
import Footer from 'componenets/Footer';
import Gender from 'componenets/Gender';
import DatingReasons from 'componenets/Interest';
import Location from 'componenets/Location';
import ProgressBar from 'componenets/ProgressBar';
import Question from 'componenets/Question';
import Stepper from 'componenets/Stepper';
import { GENDER, SEEKING } from 'helpers/constants';
import { appSelector } from 'helpers/reduxSelectors';
import './App.scss';

import Password from './componenets/Password';
import Username from './componenets/Username';

//TODO: REMOVE UNUSED FONTS
//TODO: CHANGE ALL MUI COMPONENTS
//TODO: CHANGE GIT CONFIG USER NAME EMAIL
//TODO: SCSS MIXINS - flex, back center, input, text, font size

const App = () => {
	const { step } = useSelector(appSelector);
	return (
		<>
			<Box className='home'>
				<CardForm renderStepper={() => <Stepper />} renderProggressBar={() => <ProgressBar />}>
					<Question />
					{step === 0 && <DatingReasons />}
					{step === 1 && <Gender data={GENDER} title='I am a' />}
					{step === 2 && <Gender data={SEEKING} title='Seeking a' />}
					{step === 3 && <Age />}
					{step === 4 && <Location />}
					{step === 5 && <Username />}
					{step === 6 && <Password />}
				</CardForm>
			</Box>
			<Footer />
		</>
	);
};

export default App;
