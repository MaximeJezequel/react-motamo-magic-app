const Buttons = ({ letter, goToRealGoogle, wipeHistory, goToWiki }) => {
	return (
		<div className="buttons">
			<button onClick={letter < 6 ? goToRealGoogle : wipeHistory}>
				Recherche Google
			</button>
			<button onClick={letter < 6 ? null : goToWiki}>J'ai de la chance</button>
		</div>
	)
}

export default Buttons
