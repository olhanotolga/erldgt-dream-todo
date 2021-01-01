import { createMuiTheme } from '@material-ui/core';

export const darkTheme = createMuiTheme({
	palette: {
		type: 'dark',
		primary: {
			main: '#69f0ae',
			light: '#9fffe0',
			dark: '#2bbd7e',
			contrastText: '#000000'
		},
		secondary: {
			main: '#263238',
			light: '#4f5b62',
			dark: '#000a12',
			contrastText: '#ffffff',
		},
		grey: {
			400: '#bdbdbd',
			300: '#E1E2E1',
			100: '#F5F5F6'
		},
		background: {
			default: '#303030'
		}
	},
	typography: {
		fontFamily: "'Nunito', sans-serif",
		fontSize: 18,
		h1: {
			fontFamily: "'Ubuntu', sans-serif"
		},
		button: {
			fontFamily: "'Ubuntu', sans-serif"
		},
		body1: {
			fontFamily: "'Nunito', sans-serif"
		},
		body2: {
			fontFamily: "'Nunito', sans-serif"
		}
	},
	overrides: {
		MuiSvgIcon: {
			root: {
				fill: '#2bbd7e'
			}
		},
		MuiIconButton: {
			label: {
				color: '#69f0ae'
			}
		},
		MuiOutlinedInput: {
			root: {
				backgroundColor: 'rgba(255, 255, 255, 0.12)'
			}
		},
		MuiFormLabel: {
			root: {
				backgroundColor: '#000a12',
				padding: '0.2rem',
				"&$focused": {
					color: '#9fffe0'
				}
			},
		}
	},
	props: {
		MuiButton: {
			variant: 'contained',
			color: 'primary'
		},
		MuiCheckbox: {
			color: 'primary',
			disableRipple: true
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
		},
		MuiSwitch: {
			disableRipple: true
		}
	}
})