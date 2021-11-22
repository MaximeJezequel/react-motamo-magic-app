import React from "react"

const TouchAreas = ({ handleYes, handleNo }) => {
	return (
		<>
			<div className="ghostLeft" onClick={handleYes}></div>
			<div className="ghostRight" onClick={handleNo}></div>
		</>
	)
}

export default TouchAreas
