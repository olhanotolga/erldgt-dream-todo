// import { Theme } from '@material-ui/core';
import { lightTheme } from './light';
import { darkTheme } from './dark';


export function getThemeByName(theme) {
	return themeMap[theme];
}

const themeMap = {
	lightTheme,
	darkTheme
};
