import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import React, { useState } from 'react';
import Switch from '@material-ui/core/Switch';

// 'children' refers here to child elements which are nested inside this one. it is specified which elements are nested in the App class
export function AppWrapper({ children }) {
	const [darkState, setDarkState] = useState(false);
	const paletteType = darkState ? 'dark' : 'light';
	const darkTheme = createMuiTheme({
		palette: {
			type: paletteType,
		}
	});
	const handleThemeChange = () => {
		setDarkState(!darkState);
	};

	return (
		<ThemeProvider theme={darkTheme}>
				<Switch checked={darkState} onChange={handleThemeChange} />
			<section className="Wrapper">
				{ children }
			</section>
		</ThemeProvider>
	)
}