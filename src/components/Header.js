import React from "react"

const Header = ({
	url,
	handleAll,
	handleImg,
	handleReset,
	letter,
	count,
	setCount,
	total,
	setMaxTotal,
	initial,
	mode,
	setMode,
}) => {
	const handleMode = () => {
		if (count !== 6) {
			setCount(6)
			setMaxTotal(61)
			handleReset()
		}
		mode === "words" ? setMode("cards") : setMode("words")
	}

	return (
		<div className="header">
			<div className="headerleft">
				<svg className="headerleftsvg">
					{/* <path d="M3 9h18v-2H3v2zm0"></path>
					<path d="M3 14h18v-2H3v2zm0"></path>
					<path d="M3 19h18v-2H3v2zm0"></path> */}
					<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
				</svg>
				<p
					className={
						url === 0 || url === 2
							? "headerlefttitle headeractive"
							: "headerlefttitle"
					}
					onClick={handleAll}
				>
					TOUS
				</p>
				<p
					className={
						url === 1 ? "headerlefttitle headeractive" : "headerlefttitle"
					}
					onClick={handleImg}
				>
					IMAGES
				</p>
			</div>
			<div className="headerright">
				<svg className="gb_6e" focusable="false" viewBox="0 0 24 24">
					<path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
				</svg>
				<div className={`google-user ${mode}Mode`} onClick={handleMode}>
					{letter > 0 ? total : initial}
				</div>
			</div>
		</div>
	)
}

export default Header
