import { createMuiTheme } from '@material-ui/core';

export const lightTheme = createMuiTheme({
	palette: {
		type: 'light',
		primary: {
			main: '#40c4ff',
			light: '#82f7ff',
			dark: '#0094cc',
			contrastText: '#000000'
		},
		secondary: {
			main: '#37474f',
			light: '#62717b',
			dark: '#101f27',
			contrastText: '#ffffff'
		},
		grey: {
			400: '#bdbdbd',
			300: '#E1E2E1',
			100: '#F5F5F6'
		}
	},
	overrides: {
		MuiButton: {
			contained: {
				backgroundColor: '#40c4ff',
			}
		},
		MuiSvgIcon: {
			root: {
				fill: '#37474f'
			}
		}
	},
	props: {
		MuiButton: {
			variant: 'contained',
			color: 'primary'
		},
		MuiCheckbox: {
			color: 'primary'
		},
		MuiTextField: {
			variant: 'outlined',
			InputLabelProps: {
				shrink: true
			}
		},
		MuiPaper: {
			elevation: 4
		},
		MuiCard: {
			elevation: 4
		}
	}
})