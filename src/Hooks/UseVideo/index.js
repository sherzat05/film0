import { createContext, useContext, useState } from 'react'
import { useLanguage } from '../UseLanguage'
import axios from 'axios'
import { API_KEY } from '../../API'

const VideoContext = createContext()

export const useVideo = () => {
	return useContext(VideoContext)
}
export const VideoProvider = ({ children, movieId }) => {
	const [videos, setVideos] = useState([])
	const { language, saveLanguage } = useLanguage()
	const [visibleVideos, setVisibleVideos] = useState(2)
	const [showAllVideos, setShowAllVideos] = useState(false)

	const fetchVideos = async () => {
		const response = await axios.get(
			`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}&language=${language}`
		)
		return response.data.results
	}

	const loadVideos = async () => {
		const videoData = await fetchVideos()
		setVideos(videoData)
	}
	const loadMoreVideos = () => {
		setVisibleVideos(visibleVideos + 2)
	}
	const hideMoreVideos = () => {
		setVisibleVideos(2)
	}
	return (
		<VideoContext.Provider
			value={{
                loadVideos,
				saveLanguage,
				visibleVideos,
				showAllVideos,
				loadMoreVideos,
				hideMoreVideos,
				videos
			}}
		>
			{children}
		</VideoContext.Provider>
	)
}
