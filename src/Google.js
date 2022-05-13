import React from "react"
import { useState, useEffect } from "react"

import Buttons from "./components/Buttons"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Logo from "./components/Logo"
import SearchBar from "./components/SearchBar"
import TouchAreas from "./components/TouchAreas"
import cards from "./assets/mnemonica"
import france from "./assets/france"
import words from "./assets/stego"
// import words from "./assets/words"

import "./Google.css"

const Google = () => {
	// initial
	let motamo
	let offset
	let google = "https://www.google.com/search?q="
	let defaultMode = process.env.REACT_APP_default_mode || "words"
	let defaultUrl = parseInt(process.env.REACT_APP_default_url || 0)
	let darkTheme = parseInt(process.env.REACT_APP_dark_theme || 0)
	let logoSize = process.env.REACT_APP_logo_size || "2x"
	let initial = process.env.REACT_APP_initial || "M"

	// states
	const [googleSearch, setGoogleSearch] = useState("")
	const [mode, setMode] = useState(defaultMode)
	const [count, setCount] = useState(5)
	const [letter, setLetter] = useState(0)
	const [total, setTotal] = useState(0)
	const [maxTotal, setMaxTotal] = useState(33)
	const [url, setUrl] = useState(defaultUrl)
	const [darkMode, setDarkMode] = useState(darkTheme)
	const [browserName, setBrowserName] = useState("")

	const browserDetect = () => {
		if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
			setBrowserName("chrome")
		} else if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
			setBrowserName("firefox")
		}
	}

	// modes
	switch (mode) {
		case "words":
			motamo = words
			offset = 1
			break
		case "cards":
			motamo = cards
			offset = 0
			break
		case "france":
			motamo = france
			offset = 0
			break
		default:
			motamo = words
			offset = 1
	}

	switch (url) {
		case 0:
			google = `https://www.google.com/search?q=${motamo[total - 1 + offset]}`
			break
		case 1:
			google = `https://www.google.com/search?q=${
				motamo[total - 1 + offset]
			}&tbm=isch`
			break
		case 2:
			google =
				browserName === "firefox"
					? `https://www.google.com/maps/place/${motamo[total - 1 + offset]}`
					: `https://www.google.com/search?q=${motamo[total - 1 + offset]}`
			break
		default:
			google = `https://www.google.com/search?q=${motamo[total - 1 + offset]}`
	}

	// functions
	useEffect(() => {
		browserDetect()
		setGoogleSearch("")
	}, [browserName])

	useEffect(() => {
		handleReset()
	}, [count])

	const goToRealGoogle = () => {
		window.location.href =
			url === 0 || url === 2
				? `https://www.google.com/search?q=${googleSearch}`
				: `https://www.google.com/search?q=${googleSearch}&tbm=isch`
	}

	const handleChange = (e) => setGoogleSearch(e.target.value)
	const handleEnter = (e) => {
		e.target.value.length > 0 && e.keyCode === 13 && goToRealGoogle()
	}
	const handleYes = () => {
		if (letter < count) {
			setLetter(letter + 1)
			setTotal(total + Math.pow(2, count - 1 - letter))
		}
	}
	const handleNo = () => {
		if (letter < count) {
			setLetter(letter + 1)
		}
	}
	const handleReset = () => {
		setLetter(0)
		setTotal(0)
		setGoogleSearch("")
	}
	const handleAll = () => {
		setUrl(0)
	}
	const handleImg = () => {
		setUrl(1)
	}
	const handleFR = () => {
		setUrl(2)
		setMode("france")
		setCount(7)
		setMaxTotal(101)
		handleReset()
	}

	const wipeHistory = () => {
		total > 0 - offset && total < maxTotal && window.location.replace(google)
	}
	const goToWiki = () => {
		let wiki = `https://fr.wikipedia.org/wiki/${motamo[total - 1 + offset]}`
		total > 0 - offset && total < maxTotal && window.location.replace(wiki)
	}

	return (
		<div className={darkMode ? "google dark" : "google"}>
			<Header
				darkMode={darkMode}
				mode={mode}
				setMode={setMode}
				url={url}
				handleAll={handleAll}
				handleImg={handleImg}
				letter={letter}
				setCount={setCount}
				total={total}
				setMaxTotal={setMaxTotal}
				initial={initial}
			/>
			<div className="empty-top"></div>
			<div className="body">
				<Logo
					darkMode={darkMode}
					logoSize={logoSize}
					handleReset={handleReset}
					url={url}
				/>
				<SearchBar
					darkMode={darkMode}
					offset={offset}
					motamo={motamo}
					count={count}
					letter={letter}
					total={total}
					googleSearch={googleSearch}
					handleChange={handleChange}
					handleEnter={handleEnter}
				/>
				<Buttons
					darkMode={darkMode}
					count={count}
					letter={letter}
					realGoogle={goToRealGoogle}
					wipeHistory={wipeHistory}
					goToWiki={goToWiki}
				/>
			</div>
			{/* <div>Google disponible en : English</div> */}
			{letter < count && (
				<TouchAreas handleYes={handleYes} handleNo={handleNo} />
			)}
			<div className="empty-bottom"></div>
			<Footer
				darkMode={darkMode}
				setDarkMode={setDarkMode}
				count={count}
				handleFR={handleFR}
			/>
		</div>
	)
}

export default Google
