import React from 'react'
import { MovieCard } from '../UI/MovieCard'
import { useRated } from '../../Hooks/UseRated'
import { useEffect } from 'react'

export const TopRated = () => {
	const {
		page,
		rated,
		searchPage,
		setSearchPage,
		handleNextPage,
		handlePreviousPage,
		handleFirstPage,
		handlePageSearch,
		getRated,
		setRated,
		API_KEY,
		language
	} = useRated()

	useEffect(() => {
		getRated(API_KEY, language, page).then((data) => {
			setRated(data)
		})
	}, [language, page])

	return (
		<>
			<div className='popular'>
				<div className='container flex flex-col text-center items-center gap-5 justify-center'>
					<div className='flex items-center gap-10'>
						<div className='page-navigation text-center justify-center inline-flex items-center gap-5'>
							<button
								className={`${
									page > 9
										? 'scale-1 visible block'
										: 'scale-0 invisible hidden'
								}
                                        bg-[#05d1e3] text-white py-2 px-6 rounded-md border-2 border-[#1d6e76] border-solid 
                                        `}
								onClick={handleFirstPage}
							>
								First Page
							</button>
							<button
								className='  bg-[#05d1e3] text-white border-2 border-[#1d6e76] border-solid py-2 px-9 rounded-md'
								onClick={handlePreviousPage}
							>
								Prev {page - 1}
							</button>
							<button
								className='  bg-[#05d1e3] text-white border-2 border-[#1d6e76] border-solid py-2 px-9 rounded-md'
								onClick={handleNextPage}
								onChange={(e) => {
									if (e.target.value < 500) {
										setSearchPage(e.target.value)
									}
								}}
								onKeyDown={(events) => {
									if (events.key === 'Enter') {
										handlePageSearch()
									}
								}}
							>
								Next {page}
							</button>
						</div>
						<div className='flex items-center gap-1'>
							<h4>Search Page: </h4>
							<input
								type='text'
								className='placeholder:text-black w-7 border-b-2 border-solid border-black'
								name='SearchPage'
								id='SearchPages'
								value={searchPage}
								onChange={(e) => {
									if (e.target.value < 500) {
										setSearchPage(e.target.value)
									}
								}}
								onKeyDown={(events) => {
									if (events.key === 'Enter') {
										handlePageSearch()
									}
								}}
							/>
						</div>
					</div>
					<div className='flex flex-wrap text-center items-start gap-5 justify-center'>
						{rated.map((el, index) => {
							return <MovieCard el={el} key={index} />
						})}
					</div>
				</div>
			</div>
		</>
	)
}
