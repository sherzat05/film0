import { createContext, useContext, useState } from 'react'
import { API_KEY } from '../../API'
import axios from 'axios'
import { useLanguage } from '../UseLanguage'
import { usePage } from '../UsePage'
const RatedContext = createContext()

export const useRated = () => {
	return useContext(RatedContext)
}

export const RatedProvider = ({ children }) => {
	const { page, setPage } = usePage()
	const [rated, setRated] = useState([])
	const [searchPage, setSearchPage] = useState('')
	const { language } = useLanguage()

	const getRated = async (key, lang, pageNumber) => {
		const response = await axios(
			`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=${lang}&page=${pageNumber}`
		)
		return response.data.results
	}

	const handleNextPage = () => {
		setPage(page + 1)
	}
	const handlePreviousPage = () => {
		if (page > 1) {
			setPage(page - 1)
		}
	}
	const handleFirstPage = () => {
		setPage(1)
		setSearchPage('')
	}

	const handlePageSearch = () => {
		const pageNumber = parseInt(searchPage)
		if (!isNaN(pageNumber) && pageNumber >= 1) {
			setPage(pageNumber)
		}
	}
	return (
		<RatedContext.Provider
			value={{
				getRated,
				setRated,
				API_KEY,
				language,
				page,
				rated,
				searchPage,
				setSearchPage,
				handleNextPage,
				handlePreviousPage,
				handleFirstPage,
				handlePageSearch
			}}
		>
			{children}
		</RatedContext.Provider>
	)
}
