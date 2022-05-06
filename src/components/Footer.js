import React from "react"

const Footer = ({ handleFR }) => {
	return (
		<div className="footer" onClick={(event) => event.stopPropagation()}>
			<div className="footer-row" onClick={() => handleFR()}>
				France
			</div>
			<div className="footer-3col">
				{/* <div className="footer-col">Dark theme: off</div> */}
				<div className="footer-col">Paramètres</div>
				<div className="footer-col">Confidentialité</div>
				<div className="footer-col">Conditions</div>
			</div>
		</div>
	)
}

export default Footer
