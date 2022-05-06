import React from "react"
import { useState, useEffect } from "react"

import Buttons from "./components/Buttons"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Logo from "./components/Logo"
import SearchBar from "./components/SearchBar"
import TouchAreas from "./components/TouchAreas"
import cards from "./assets/mnemonica"
import words from "./assets/words"
import france from "./assets/france"

import "./Google.css"

const Google = () => {
	// initial
	let initial = "M"
	let motamo
	let google = "https://www.google.com/search?q="

	// states
	const [googleSearch, setGoogleSearch] = useState("")
	const [mode, setMode] = useState("words")
	const [count, setCount] = useState(6)
	const [letter, setLetter] = useState(0)
	const [total, setTotal] = useState(0)
	const [maxTotal, setMaxTotal] = useState(61)
	const [url, setUrl] = useState(0)

	// modes
	switch (mode) {
		case "words":
			motamo = words
			break
		case "cards":
			motamo = cards
			break
		case "france":
			motamo = france
			break
		default:
			motamo = words
	}

	switch (url) {
		case 0:
			google = `https://www.google.com/search?q=${motamo[total - 1]}`
			break
		case 1:
			google = `https://www.google.com/search?q=${motamo[total - 1]}&tbm=isch`
			break
		case 2:
			google = `https://www.google.com/maps/place/${motamo[total - 1]}`
			break
		default:
			google = `https://www.google.com/search?q=${motamo[total - 1]}`
	}

	// functions
	useEffect(() => {
		setGoogleSearch("")
	}, [])

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
		setMaxTotal(100)
		handleReset()
	}

	const wipeHistory = () => {
		total > 0 && total < maxTotal && window.location.replace(google)
	}
	const goToWiki = () => {
		let wiki = `https://fr.wikipedia.org/wiki/${motamo[total - 1]}`
		total > 0 && total < maxTotal && window.location.replace(wiki)
	}

	return (
		<div className="google">
			<Header
				mode={mode}
				setMode={setMode}
				url={url}
				handleAll={handleAll}
				handleImg={handleImg}
				handleReset={handleReset}
				letter={letter}
				count={count}
				setCount={setCount}
				total={total}
				setMaxTotal={setMaxTotal}
				initial={initial}
			/>
			<div className="empty-top"></div>
			<div className="body">
				<Logo handleReset={handleReset} url={url} />
				<SearchBar
					motamo={motamo}
					count={count}
					letter={letter}
					total={total}
					googleSearch={googleSearch}
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
			{letter < count && (
				<TouchAreas handleYes={handleYes} handleNo={handleNo} />
			)}
			<div className="empty-bottom"></div>
			<Footer handleFR={handleFR} />
		</div>
	)
}

export default Google
