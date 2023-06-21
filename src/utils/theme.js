import { createTheme } from '@mui/material';

export const theme = createTheme({
	components: {
		MuiLinearProgress: {
			styleOverrides: {
				root: {
					height: '6px',
					background: '#E5E8EB',
					borderRadius: '34px',
				},
				bar1Determinate: {
					background: '#FFDC22',
					borderRadius: '34px',
				},
			},
		},
	},
});
