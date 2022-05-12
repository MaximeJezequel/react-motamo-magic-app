import React from "react"

const SearchBar = ({
	darkMode,
	motamo,
	count,
	letter,
	total,
	googleSearch,
	handleChange,
	handleEnter,
}) => {
	return (
		<div className="searchBar">
			<div className={darkMode ? "form greyborder" : "form"}>
				<div>
					{letter < 1 || letter === count ? (
						<span className="material-icons leftlogo"> search </span>
					) : (
						<p className="number"> ({letter}) </p>
					)}
				</div>
				<input
					type="texte"
					id={darkMode ? "result_dark" : "result_light"}
					style={{
						color: darkMode ? "#e8eaed" : "#202124",
					}}
					placeholder={letter > count - 1 ? motamo[total - 1] : ""}
					onChange={(e) => handleChange(e)}
					onKeyDown={(e) => handleEnter(e)}
					value={letter === count ? "" : googleSearch}
				></input>
			</div>
		</div>
	)
}

export default SearchBar
