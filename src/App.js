import { Box } from '@mui/material';
import CardForm from 'componenets/Card';
import Footer from 'componenets/Footer';
import ProgressBar from 'componenets/ProgressBar';
import Question from 'componenets/Question';
import Register from 'componenets/Register';
import Stepper from 'componenets/Stepper';
import './App.scss';

//TODO: REMOVE USER ID FROM LOCAL STORAGE

const App = () => (
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

export default App;
