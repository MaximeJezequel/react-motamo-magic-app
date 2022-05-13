import React from "react"

const Logo = ({ darkMode, logoSize, handleReset, url }) => {
	const googleLogo = darkMode
		? `https://www.google.fr/images/branding/googlelogo/${logoSize}/googlelogo_light_color_160x56dp.png`
		: `https://www.google.fr/images/branding/googlelogo/${logoSize}/googlelogo_color_160x56dp.png`
	return (
		<div className="logo">
			<img src={googleLogo} alt="" onClick={handleReset} />
			{url === 1 && (
				<span
					className={logoSize === "2x" ? "logoImg logo2x" : "logoImg logo1x"}
				>
					images
				</span>
			)}
		</div>
	)
}

export default Logo
