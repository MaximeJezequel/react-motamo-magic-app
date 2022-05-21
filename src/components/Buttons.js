import React from "react"

import "../Google.css"

const Buttons = ({
	darkMode,
	count,
	letter,
	goToRealGoogle,
	wipeHistory,
	goToWiki,
}) => {
	return (
		<div className="buttons">
			<button
				className="button"
				style={{
					color: darkMode ? "#e8eaed" : "#4d4d4d",
					backgroundColor: darkMode ? "#303134" : "#f7f8fa",
				}}
				onClick={letter < count ? goToRealGoogle : wipeHistory}
			>
				Recherche Google
			</button>
			<button
				className="button"
				style={{
					color: darkMode ? "#e8eaed" : "#4d4d4d",
					backgroundColor: darkMode ? "#303134" : "#f7f8fa",
				}}
				onClick={letter < count ? null : goToWiki}
			>
				J'ai de la chance
			</button>
		</div>
	)
}

export default Buttons
