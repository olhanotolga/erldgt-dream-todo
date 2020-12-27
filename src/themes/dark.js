import { createMuiTheme } from '@material-ui/core';

export const darkTheme = createMuiTheme({
	palette: {
		type: 'dark',
		primary: {
			main: '#ffd740',
			light: '#ffff74',
			dark: '#c8a600',
			contrastText: '#000000'
		},
		secondary: {
			main: '#25a59a',
			light: '#63d7cb',
			dark: '#00756c',
			contrastText: '#000000',
		}
	},
	overrides: {
		MuiButton: {
			contained: {
				backgroundColor: '#ffd740'
			}
		}
	}
})