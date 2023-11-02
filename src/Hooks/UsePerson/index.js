import axios from 'axios'
import { createContext, useContext, useState } from 'react'
import { useLanguage } from '../UseLanguage'
const PersonContex = createContext()
export const usePerson = () => {
	return useContext(PersonContex)
}
export const PersonProvider = ({ children }) => {
	const [person, setPerson] = useState({})
	const { language, saveLanguage } = useLanguage()
	const [openShowFullText, setOpenShowFullText] = useState(false)

	const getPerson = async (key, id, lang) => {
		const response = await axios(`
    https://api.themoviedb.org/3/person/${id}?api_key=${key}&language=${lang}
  `)
		return response.data
	}
	return (
		<PersonContex.Provider
			value={{
				person,
				setPerson,
				language,
				saveLanguage,
				openShowFullText,
				setOpenShowFullText,
				getPerson
			}}
		>
			{children}
		</PersonContex.Provider>
	)
}
