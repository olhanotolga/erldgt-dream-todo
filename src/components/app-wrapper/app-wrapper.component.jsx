// 'children' refers here to child elements which are nested inside this one. it is specified which elements are nested in the App class
export function AppWrapper({ children }) {

	return (
		<section className="Wrapper">
			{ children }
		</section>
	)
}