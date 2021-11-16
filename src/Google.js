import { useState } from "react"

import Buttons from "./components/Buttons"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Logo from "./components/Logo"
import SearchBar from "./components/SearchBar"
import TouchAreas from "./components/TouchAreas"
import motamo from "./assets/motamo"

import "./Google.css"

const Google = () => {
	// initial
	let initial = "M"

	// states
	let [googleSearch, setGoogleSearch] = useState("")
	let [letter, setLetter] = useState(0)
	let [total, setTotal] = useState(0)
	let [url, setUrl] = useState(0)

	// functions
	const goToRealGoogle = () => {
		window.location.href = `https://www.google.com/search?q=${googleSearch}`
	}

	const handleChange = (e) => setGoogleSearch(e.target.value)

	const handleEnter = (e) => {
		e.target.value.length > 0 && e.keyCode === 13 && goToRealGoogle()
	}

	const handleYes = () => {
		if (letter < 6) {
			setLetter(letter + 1)
			setTotal(total + Math.pow(2, 5 - letter))
		}
	}

	const handleNo = () => {
		if (letter < 6) {
			setLetter(letter + 1)
		}
	}
	const handleReset = () => {
		setLetter(0)
		setTotal(0)
	}
	const handleAll = () => {
		setUrl(0)
	}
	const handleImg = () => {
		setUrl(1)
	}

	const wipeHistory = () => {
		let google = "https://www.google.com/search?q="
		url === 1
			? (google = `https://www.google.com/search?q=${
					motamo[total - 1]
			  }&tbm=isch`)
			: (google = `https://www.google.com/search?q=${motamo[total - 1]}`)
		total > 0 && total < 61 && window.location.replace(google)
	}
	const goToWiki = () => {
		let wiki = `https://fr.wikipedia.org/wiki/${motamo[total - 1]}`
		total > 0 && total < 61 && window.location.replace(wiki)
	}

	return (
		<div className="google">
			<Header
				url={url}
				handleAll={handleAll}
				handleImg={handleImg}
				letter={letter}
				total={total}
				initial={initial}
			/>
			<div className="empty-top"></div>
			<div className="body">
				<Logo handleReset={handleReset} url={url} />
				<SearchBar
					motamo={motamo}
					letter={letter}
					total={total}
					handleChange={handleChange}
					handleEnter={handleEnter}
				/>
				<Buttons
					letter={letter}
					realGoogle={goToRealGoogle}
					wipeHistory={wipeHistory}
					goToWiki={goToWiki}
				/>
			</div>
			{/* <div>Google disponible en : English</div> */}
			{letter < 6 && <TouchAreas handleYes={handleYes} handleNo={handleNo} />}
			<div className="empty-bottom"></div>
			<Footer />
		</div>
	)
}

export default Google
