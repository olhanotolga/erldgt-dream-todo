import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeProvider';
import { Button } from '@material-ui/core';

// 'children' refers here to child elements which are nested inside this one. it is specified which elements are nested in the App class
export function AppWrapper({ children }) {

	const setThemeName = useContext(ThemeContext)

	return (
		<section className="Wrapper">
			<Button
					variant='contained'
					backgroundColor='primary'
					color='white'
					onClick={() => setThemeName('lightTheme')}>
						Set Light Theme
				</Button>
				<Button
					variant='contained'
					color='secondary'
					onClick={() => setThemeName('darkTheme')}>
						Set Dark Theme
				</Button>
			{ children }
		</section>
	)
}