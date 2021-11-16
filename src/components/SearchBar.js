const SearchBar = ({ letter, motamo, total, handleChange, handleEnter }) => {
	return (
		<div className="searchBar">
			<div className="form">
				<div>
					{letter < 1 || letter === 6 ? (
						<span className="material-icons leftlogo"> search </span>
					) : (
						<p className="number"> ({letter}) </p>
					)}
				</div>
				<input
					type="texte"
					placeholder={letter > 5 ? motamo[total - 1] : null}
					onChange={(e) => handleChange(e)}
					onKeyDown={(e) => handleEnter(e)}
					value={letter === 6 ? "" : null}
				></input>
			</div>
		</div>
	)
}

export default SearchBar
