import React from "react"

const SearchBar = ({
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
			<div className="form">
				<div>
					{letter < 1 || letter === count ? (
						<span className="material-icons leftlogo"> search </span>
					) : (
						<p className="number"> ({letter}) </p>
					)}
				</div>
				<input
					type="texte"
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
