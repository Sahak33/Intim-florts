import { Box } from '@mui/material';
import CardForm from 'componenets/Card';
import Footer from 'componenets/Footer';
import ProgressBar from 'componenets/ProgressBar';
import Question from 'componenets/Question';
import Register from 'componenets/Register';
import Stepper from 'componenets/Stepper';
import './App.scss';

//TODO: REMOVE UNUSED FONTS
//TODO: CHANGE ALL MUI COMPONENTS
//TODO: SCSS MIXINS - flex, back center, input, text, font size
//TODO: REMOVE USER ID FROM LOCAL STORAGE

const App = () => (
	<>
		<Box className='home'>
			<CardForm renderStepper={() => <Stepper />} renderProggressBar={() => <ProgressBar />}>
				<Question />
				<Register />
			</CardForm>
		</Box>
		<Footer />
	</>
);

export default App;
