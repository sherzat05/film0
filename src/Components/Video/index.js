import React, { useEffect } from 'react'

import { useVideo } from '../../Hooks/UseVideo'

export const Video = () => {
	const {
		saveLanguage,
		visibleVideos,
		showAllVideos,
		loadMoreVideos,
		hideMoreVideos,
		videos,
		loadVideos
	} = useVideo()

	useEffect(() => {
		loadVideos()
	}, [loadVideos])

	return (
		<div style={{ padding: 120 }} className='container'>
			<div className='videos flex items-center flex-col justify-center gap-10 w-full'>
				<div className='flex items-center flex-wrap justify-center gap-10 w-full'>
					{videos.length > 0 ? (
						videos
							.slice(0, showAllVideos ? videos.length : visibleVideos)
							.map((el, index) => (
								<div
									className='video--block flex flex-col items-start gap-2'
									key={index}
								>
									<iframe
										width='460'
										height='275'
										src={`https://www.youtube.com/embed/${el.key}`}
										title='YouTube video player'
										allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
										allowfullscreen=''
									></iframe>
									<h4 className='font-medium text-lg'>{el.name}</h4>
								</div>
							))
					) : (
						<p>
							{saveLanguage ? 'Нет доступных видео' : 'No available videos'}
						</p>
					)}
				</div>
				{visibleVideos > 5 ? (
					<button
						id='more'
						className='bg- text-xl font-semibold border border-solid rounded-lg py-2 px-10 border-gray-600'
						onClick={hideMoreVideos}
					>
						{saveLanguage ? 'Закрыть' : 'Hide'}
					</button>
				) : visibleVideos > 0 ? (
					''
				) : (
					<button
						id='more'
						className='bg- text-xl font-semibold border border-solid rounded-lg py-2 px-10 border-gray-600'
						onClick={loadMoreVideos}
					>
						{saveLanguage ? 'Ещё' : 'More'}
					</button>
				)}
			</div>
		</div>
	)
}
