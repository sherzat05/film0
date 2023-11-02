import { createContext, useContext, useState } from 'react'
import { useLanguage } from '../UseLanguage'
import axios from 'axios'
import { API_KEY } from '../../API'

const ActorContext = createContext()

export const useActor = () => {
	return useContext(ActorContext)
}
export const ActorPropvider = ({ children, movieId }) => {
	const [showActors, setShowActors] = useState([])
	const { saveLanguage, language } = useLanguage()

	async function getActors(key, id, lang) {
		const response = await axios(
			`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=${lang}`
		)
		return response.data.cast
	}
	console.log(showActors)

	return (
		<ActorContext.Provider
			value={{
				setShowActors,
				movieId,
				API_KEY,
				getActors,
				language,
				saveLanguage,
				showActors
			}}
		>
			{children}
		</ActorContext.Provider>
	)
}
