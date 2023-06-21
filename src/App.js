import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import Age from 'componenets/Age';
import CardForm from 'componenets/Card';
import Footer from 'componenets/Footer';
import Gender from 'componenets/Gender';
import DatingReasons from 'componenets/Interest';
import Location from 'componenets/Location';
import Password from 'componenets/Password';
import ProgressBar from 'componenets/ProgressBar';
import Question from 'componenets/Question';
import Stepper from 'componenets/Stepper';
import Username from 'componenets/Username';
import { GENDER, SEEKING } from 'helpers/constants';
import { appSelector } from 'helpers/reduxSelectors';
import './App.scss';

import Complete from './componenets/Complete';

//TODO: REMOVE UNUSED FONTS
//TODO: CHANGE ALL MUI COMPONENTS
//TODO: CHANGE GIT CONFIG USER NAME EMAIL
//TODO: SCSS MIXINS - flex, back center, input, text, font size
//TODO: REMOVE USER ID FROM LOCAL STORAGE

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
					{step === 7 && <Complete />}
				</CardForm>
			</Box>
			<Footer />
		</>
	);
};

export default App;
