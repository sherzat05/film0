import { createContext, useContext, useState } from 'react'
import { API_KEY } from '../../API'
import axios from 'axios'
import { useLanguage } from '../UseLanguage'
import { usePage } from '../UsePage'
const PopularContext = createContext()

export const usePopular = () => {
	return useContext(PopularContext)
}

export const PopularProvider = ({ children }) => {
	const { page, setPage, handleNextPage, handlePreviousPage, handleFirstPage } =
		usePage()
	const [popular, setPopular] = useState([])
	const [searchPage, setSearchPage] = useState('')
	const { language } = useLanguage()

	const getPopular = async (key, lang, pageNumber) => {
		const response = await axios(
			`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=${lang}&page=${pageNumber}`
		)
		return response.data.results
	}

	const handlePageSearch = () => {
		const pageNumber = parseInt(searchPage)
		if (!isNaN(pageNumber) && pageNumber >= 1) {
			setPage(pageNumber)
		}
	}
	console.log(popular)

	return (
		<PopularContext.Provider
			value={{
                API_KEY,
                setPopular,
				language,
				getPopular,
				page,
				handleNextPage,
				handlePreviousPage,
				handleFirstPage,
				popular,
				searchPage,
				setSearchPage,
				handlePageSearch
			}}
		>
			{children}
		</PopularContext.Provider>
	)
}
