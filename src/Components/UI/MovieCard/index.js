import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Loader } from '../Loader'

export const MovieCard = ({ el }) => {
	const [showimage, setShowimage] = useState(false)
	useEffect(() => {
		setTimeout(() => {
			setShowimage(true)
		}, 1700)
	}, [])
	return (
		<>
			<div
				className='popular--card'
				style={{
					width: 280,
					height: 440
				}}
			>
				{showimage ? (
					<Link to={`/movie/details/${el.id}`}>
						<div
							className='popular--card__image'
							style={{
								backgroundImage: `url(https://themoviedb.org/t/p/w220_and_h330_face/${el.poster_path})`
							}}
						></div>
					</Link>
				) : (
					<div className=' w-full h-full popular--card__image flex items-center justify-center'>
						<Loader />
					</div>
				)}
				<div className='flex flex-col items-center justify-center mt-2 px-5'>
					<h4
						style={{
							fontSize:
								el.title && el.title.split(' ').length > 3 ? '14px' : '18px'
						}}
					>
						{el.title}
					</h4>
					<h5 className='text-base'>{el.release_date}</h5>
				</div>
			</div>
		</>
	)
}
