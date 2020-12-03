import { createMuiTheme } from '@material-ui/core';

export const lightTheme = createMuiTheme({
	palette: {
		type: 'light',
		primary: {
			main: '#37474f',
			light: '#62717b',
			dark: '#101f27',
			contrastText: '#ffffff'
		},
		secondary: {
			main: '#40c4ff',
			light: '#82f7ff',
			dark: '#0094cc',
			contrastText: '#000000'
		},
		grey: {
			400: '#bdbdbd',
			300: '#E1E2E1',
			100: '#F5F5F6'
		}
	}
})