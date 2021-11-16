const Logo = ({ handleReset, url }) => {
	return (
		<div className="logo">
			<img
				src="https://www.google.fr/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png"
				alt=""
				onClick={handleReset}
			/>
			{url === 1 && <span className="logoImg">images</span>}
		</div>
	)
}

export default Logo
