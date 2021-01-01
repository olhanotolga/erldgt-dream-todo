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
			main: '#455a64',
			light: '#718792',
			dark: '#1c313a',
			contrastText: '#ffffff'
		},
		grey: {
			400: '#bdbdbd',
			300: '#E1E2E1',
			100: '#F5F5F6'
		},
		background: {
			default: '#FAFAFA'
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
				fill: '#455a64'
			}
		},
		MuiIconButton: {
			label: {
				color: '#40c4ff'
			}
		},
		MuiOutlinedInput: {
			root: {
				backgroundColor: '#fafafa'
			}
		},
		MuiFormLabel: {
			root: {
				backgroundColor: '#E1E2E1',
				padding: '0.2rem',
				"&$focused": {
					color: '#0094cc'
				}
			},
		},
		MuiSwitch: {
			track: {
				backgroundColor: '#455a64',
				opacity: '0.8'
			}
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