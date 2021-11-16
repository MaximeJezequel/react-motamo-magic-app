const Header = ({ url, handleAll, handleImg, letter, total, initial }) => {
	return (
		<div className="header">
			<div className="headerleft">
				<svg className="headerleftsvg">
					<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
				</svg>
				<p
					className={
						url === 0 ? "headerlefttitle headeractive" : "headerlefttitle"
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
				<div className="google-user">{letter > 0 ? total : initial}</div>
			</div>
		</div>
	)
}

export default Header
