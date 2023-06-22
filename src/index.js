import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import App from 'App';
import { store } from 'store/store';
import { theme } from 'utils/theme';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Router>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</Provider>
	</Router>
);
