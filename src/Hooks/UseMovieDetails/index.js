import { createContext, useContext, useEffect, useState } from 'react'
import { useLanguage } from '../UseLanguage'
import axios from 'axios'

const DetailsContext = createContext()

export const useDetails = () => {
	return useContext(DetailsContext)
}

export const DetailsProvider = ({ children }) => {
	const { language, saveLanguage } = useLanguage()
	const [showFullText, setShowFullText] = useState(false)

	const [colorBasic, setColorBasic] = useState('#fff')
	const [colorHearth, setColorHearth] = useState('#fff')
	const [colorMark, setColorMark] = useState('#fff')
	const [colorStar, setColorStar] = useState('#fff')
	const [showImage, setShowImage] = useState(false)
	const [showDetails, setShowDetails] = useState(false)

	const [opens, setOpens] = useState(false)
	const [before, setBefore] = useState(false)
	const [openInfoModal, setOpenInfoModal] = useState(false)

	const [details, setDetails] = useState({})
	const getDetails = async (key, id, lang) => {
		const response = await axios(
			`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=${lang}`
		)
		return response.data
	}
	const toggleFullText = () => {
		setShowFullText(!showFullText)
	}
	const overview = details.overview || ''
	const words = overview.split(' ')
	const truncatedText = showFullText ? overview : words.slice(0, 40).join(' ')
	setTimeout(() => {
		setShowDetails(true)
	}, 1500)
	setTimeout(() => {
		setShowImage(true)
	}, 2100)

	useEffect(() => {
		const locals = localStorage.getItem('openInfoModal')
		if (locals === 'true') {
			setOpenInfoModal(!openInfoModal)
		} else {
			setOpenInfoModal(false)
		}
	}, [openInfoModal])

	return (
		<DetailsContext.Provider
			value={{
				getDetails,
				setDetails,
				language,
				saveLanguage,
				showFullText,
				colorBasic,
				setColorBasic,
				colorHearth,
				setColorHearth,
				colorMark,
				setColorMark,
				colorStar,
				setColorStar,
				showImage,
				opens,
				setOpens,
				before,
				setBefore,
				openInfoModal,
				setOpenInfoModal,
				details,
				toggleFullText,
				words,
				truncatedText,
				showDetails
			}}
		>
			{children}
		</DetailsContext.Provider>
	)
}
