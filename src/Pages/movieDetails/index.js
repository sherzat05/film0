import React, { useEffect } from 'react'
import { BiRightArrowAlt } from 'react-icons/bi'
import { ModalContent } from '../UI/modalContent'
import { Loading } from '../../Components/UI/Loading'
import { Actor, Video } from '../../Components'
import { ActorPropvider } from '../../Hooks/UseActor'
import { VideoProvider } from '../../Hooks/UseVideo'
import { useDetails } from '../../Hooks/UseMovieDetails'
import { useParams } from 'react-router-dom'
import { API_KEY } from '../../API'

export const MovieDetails = () => {
	const {
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
		showDetails,
		getDetails,
		setDetails,
		language
	} = useDetails()
	const { movieId } = useParams()
	useEffect(() => {
		getDetails(API_KEY, movieId, language).then((data) => {
			setDetails(data)
		})
		window.scrollTo(0, 0)
	}, [language, movieId])
    
	console.log(localStorage)
	// localStorage.removeItem('openInfoModal')
	return (
		<div className='mt-[108px]'>
			{showDetails ? (
				<>
					<div
						style={{
							borderBottom: '1px solid rgba(31.5, 31.5, 31.5, 1)',
							backgroundPosition: 'left calc((50vw - 170px) - 340px) top',
							backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${details.backdrop_path})`
						}}
						className='details bg-cover bg-no-repeat max-h-[530px] relative '
					>
						<div
							style={{
								opacity: '1',
								backgroundImage: ` linear-gradient(to right, rgba(31.5, 31.5, 31.5, 1) calc((50vw - 170px) - 340px), rgba(31.5, 31.5, 31.5, 0.84) 50%, rgba(31.5, 31.5, 31.5, 0.84) 100%)`
							}}
							className=' w-full h-full  py-10 bg-cover bg-no-repeat'
						>
							<div className='container flex items-start gap-9'>
								<div
									onMouseOver={() => setBefore(!before)}
									onMouseOut={() => setBefore(false)}
									className='poster relative min-w-[300px] w-[300px] h-[450px] rounded-xl overflow-hidden'
								>
									{showImage ? (
										<img
											alt=''
											src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${details.poster_path}`}
											className='object-cover z-10 relative image w-full h-full'
										/>
									) : (
										<div className=' w-full h-full flex items-center justify-center'>
											<Loading />
										</div>
									)}

									<div
										className={`${
											before || openInfoModal ? 'opacity-1' : 'opacity-0'
										} duration-[.33s] zet w-full h-full absolute z-20 cursor-pointer backdrop-blur-[10px] top-0 left-0 flex items-center justify-center gap-2`}
									>
										<div
											onClick={() => {
												setOpenInfoModal(!openInfoModal)
												setBefore(false)
												localStorage.setItem('openInfoModal', 'true')
											}}
											className='relative thenBody'
										>
											<svg
												className=' absolute  w-[30px] left-16'
												id='glyphicons-basic'
												xmlns='http://www.w3.org/2000/svg'
												viewBox='0 0 32 32'
											>
												<path
													fill='#ffffff'
													id='fullscreen'
													d='M13.72156,12.06732a.5.5,0,0,1-.06812.62219l-.96374.96375a.5.5,0,0,1-.6222.06811L7.89624,11.064,6.19342,12.76642a.49983.49983,0,0,1-.847-.27521L4.10779,4.67969a.49976.49976,0,0,1,.57184-.57184L12.491,5.34619a.50011.50011,0,0,1,.27527.8476L11.06378,7.896Zm5.58874,1.58594a.5.5,0,0,0,.6222.06811L24.10376,11.064l1.70282,1.70246a.49983.49983,0,0,0,.847-.27521l1.23858-7.81152a.49976.49976,0,0,0-.57184-.57184L19.509,5.34619a.50011.50011,0,0,0-.27527.8476L20.93622,7.896l-2.65778,4.17132a.5.5,0,0,0,.06812.62219Zm-6.6206,4.69348a.5.5,0,0,0-.6222-.06811L7.89624,20.936,6.19342,19.23358a.49983.49983,0,0,0-.847.27521L4.10779,27.32031a.49976.49976,0,0,0,.57184.57184l7.8114-1.23834a.50011.50011,0,0,0,.27527-.8476L11.06378,24.104l2.65778-4.17132a.5.5,0,0,0-.06812-.62219Zm13.11688.88684L24.10376,20.936,19.9325,18.27863a.5.5,0,0,0-.6222.06811l-.96374.96375a.5.5,0,0,0-.06812.62219L20.93622,24.104,19.2337,25.80621a.50011.50011,0,0,0,.27527.8476l7.8114,1.23834a.49976.49976,0,0,0,.57184-.57184l-1.23858-7.81152A.49983.49983,0,0,0,25.80658,19.23358Z'
												/>
											</svg>
										</div>
									</div>
									<div
										onClick={() => {
											setOpenInfoModal(false)
											localStorage.removeItem('openInfoModal')
										}}
										className='body'
										style={{
											visibility: openInfoModal ? 'visible' : 'hidden',
											transition: 'all .35s'
										}}
									></div>
									<ModalContent
										opens={opens}
										openInfoModal={openInfoModal}
										setOpenInfoModal={setOpenInfoModal}
										setBefore={setBefore}
										details={details}
										setOpens={setOpens}
										BiRightArrowAlt={BiRightArrowAlt}
									/>
								</div>
								<div className='flex flex-col items-start py-7 w-[449px]'>
									<div className='w-[809.7px] flex items-start flex-wrap gap-2'>
										<h4
											className={`text-white  text-4xl duration-[.35s] ${
												saveLanguage ? 'leading-9' : 'leading-6'
											} cursor-pointer font-bold hover:text-[#adabab]`}
										>
											{details.title}
										</h4>
										<span className='text-2xl text-[#8f8d8d]'>
											(
											{details.release_date && details.release_date.slice(0, 4)}
											)
										</span>
									</div>
									<div className='flex items-center justify-start'>
										<span className='text-white text-base'>
											{details.release_date}
										</span>
										{details.genres && details.genres.length > 0 && (
											<li className='list-disc ml-4 text-white'>
												{details.genres.map((el) => el.name).join(', ')}
											</li>
										)}
										<li className='list-disc ml-4 text-white'>
											<span>
												{saveLanguage
													? `${Math.floor(details.runtime / 60)} ч`
													: `${Math.floor(details.runtime / 60)} h`}
											</span>{' '}
											<span>
												{saveLanguage
													? `${Math.trunc(details.runtime % 60)} м `
													: `${Math.trunc(details.runtime % 60)} m`}
											</span>
										</li>
									</div>
									<div className='flex items-center mt-5'>
										<div
											className={`flex items-center gap-2  mr-8
                                ${saveLanguage ? 'w-[180px]' : 'w-[140px]'}
                            `}
										>
											<div className='circles  bg-[#081c22] min-w-[70px] min-h-[70px] w-[70px] rounded-[50%] h-[70px] py-1 px-1'>
												<div className='circs w-full h-full flex items-center justify-center border-[3px] border-solid border-[#21d07a] rounded-[50%] relative'>
													<span className='text-white text-[22px] mt-1'>
														{Math.round(details.vote_average * 10)}
														<sup>%</sup>
													</span>
												</div>
											</div>
											<h4
												className={` ${
													saveLanguage
														? ' text-base leading-5'
														: 'text-lg w-min leading-5'
												} text-white `}
											>
												{saveLanguage ? 'Оценки Пользователей' : 'User Score'}
											</h4>
										</div>
										<div className='flex items-center gap-5'>
											<div
												onClick={() =>
													colorBasic === '#fff'
														? setColorBasic('#430241')
														: colorBasic === '#430241'
														? setColorBasic('#fff')
														: ''
												}
												className='circ cursor-pointer flex items-center justify-center w-[43px] bg-[#032541] h-[43px] rounded-[50%]'
											>
												<svg
													id='glyphicons-basic'
													xmlns='http://www.w3.org/2000/svg'
													viewBox='0 0 32 32'
													className='w-[50%] mr-[2px]'
												>
													<path
														fill={colorBasic}
														id='thumbnails-list'
														d='M11,14v4a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V14a1,1,0,0,1,1-1h4A1,1,0,0,1,11,14Zm-1,7H6a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V22A1,1,0,0,0,10,21ZM10,5H6A1,1,0,0,0,5,6v4a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V6A1,1,0,0,0,10,5Zm17,6H14a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1V12A1,1,0,0,0,27,11Zm0-6H14a1,1,0,0,0-1,1V7a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1V6A1,1,0,0,0,27,5Zm0,18H14a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1V24A1,1,0,0,0,27,23Zm0-6H14a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1V18A1,1,0,0,0,27,17Z'
													/>
												</svg>
											</div>
											<div
												onClick={() =>
													colorHearth === '#fff'
														? setColorHearth('red')
														: colorHearth === 'red'
														? setColorHearth('#fff')
														: ''
												}
												className='circ cursor-pointer flex items-center justify-center w-[43px] bg-[#032541] h-[43px] rounded-[50%]'
											>
												<svg
													id='glyphicons-basic'
													xmlns='http://www.w3.org/2000/svg'
													viewBox='0 0 32 32'
													className='w-[50%] mr-[2px]'
												>
													<path
														fill={colorHearth}
														id='heart'
														d='M27.78131,11.92578c0,4.82666-6.13562,8.68128-11.0376,14.0686a.99978.99978,0,0,1-1.48742,0c-4.902-5.38732-11.03748-9.24194-11.03748-14.0686,0-5.52954,7.53626-9.48682,11.57507-3.82544a.25855.25855,0,0,0,.42029.00562C20.47992,2.43628,27.78131,6.39453,27.78131,11.92578Z'
													/>
												</svg>
											</div>
											<div
												onClick={() =>
													colorMark === '#fff'
														? setColorMark('blue')
														: colorMark === 'blue'
														? setColorMark('#fff')
														: ''
												}
												className='circ cursor-pointer flex items-center justify-center w-[43px] bg-[#032541] h-[43px] rounded-[50%]'
											>
												<svg
													id='glyphicons-basic'
													xmlns='http://www.w3.org/2000/svg'
													viewBox='0 0 32 32'
													className='w-[50%] mr-[2px]'
												>
													<path
														fill={colorMark}
														id='bookmark'
														d='M25,6V26.58582a1,1,0,0,1-1.70709.70715L16.5,20.5,9.70709,27.293A1,1,0,0,1,8,26.58582V6a2.00006,2.00006,0,0,1,2-2H23A2.00006,2.00006,0,0,1,25,6Z'
													/>
												</svg>
											</div>
											<div
												onClick={() =>
													colorStar === '#fff'
														? setColorStar('#FFD700')
														: colorStar === '#FFD700'
														? setColorStar('#fff')
														: ''
												}
												className='circ cursor-pointer flex items-center justify-center w-[43px] bg-[#032541] h-[43px] rounded-[50%]'
											>
												<svg
													id='glyphicons-basic'
													xmlns='http://www.w3.org/2000/svg'
													viewBox='0 0 32 32'
													className='w-[50%] mr-[2px]'
												>
													<path
														fill={colorStar}
														id='star'
														d='M27.34766,14.17944l-6.39209,4.64307,2.43744,7.506a.65414.65414,0,0,1-.62238.85632.643.643,0,0,1-.38086-.12744l-6.38568-4.6383-6.38574,4.6383a.643.643,0,0,1-.38086.12744.65419.65419,0,0,1-.62238-.85632l2.43744-7.506L4.66046,14.17944A.65194.65194,0,0,1,5.04358,13h7.89978L15.384,5.48438a.652.652,0,0,1,1.24018,0L19.06476,13h7.89978A.652.652,0,0,1,27.34766,14.17944Z'
													/>
												</svg>
											</div>
										</div>
									</div>
									<span className=' italic text-white mt-7 mb-1'>
										{details.tagline}
									</span>
									<div className='flex flex-col items-start gap-2'>
										<span className='text-white text-2xl'>
											{saveLanguage ? 'Обзор' : 'Review'}
										</span>
										<p className='w-[1000px] param text-white'>
											{truncatedText}{' '}
											{words.length > 40 && (
												<button
													className='font-bold ml-1'
													style={{
														color: showFullText ? 'red' : '#05b4e3'
													}}
													onClick={toggleFullText}
												>
													{showFullText
														? saveLanguage
															? 'Закрыть'
															: 'Close'
														: saveLanguage
														? 'Читать дальше...'
														: 'Read More...'}
												</button>
											)}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className='movie'>
						<div className='movie'>
							<ActorPropvider movieId={movieId}>
								<Actor />
							</ActorPropvider>
							<VideoProvider movieId={movieId}>
								<Video />
							</VideoProvider>
						</div>
					</div>
				</>
			) : (
				<div className='fixed top-[40%] left-[47%] z-20'>
					<Loading />
				</div>
			)}
		</div>
	)
}
