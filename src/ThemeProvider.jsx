import React, { useState } from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import { getThemeByName } from './themes/base';

export const ThemeContext = React.createContext(themeName => {});

const ThemeProvider = (props) => {

	const curThemeName = localStorage.getItem('appTheme') || 'lightTheme';

	// state for the theme name
	const [themeName, _setThemeName] = useState(curThemeName);

	const setThemeName = themeName => {
		localStorage.setItem('appTheme', themeName);
		_setThemeName(themeName);
	}

	// theme object
	const theme = getThemeByName(themeName);

	return (
	<ThemeContext.Provider value={setThemeName}>
		<MuiThemeProvider theme={theme}>
			{props.children}
		</MuiThemeProvider>
	</ThemeContext.Provider>
	);
}

export default ThemeProvider;