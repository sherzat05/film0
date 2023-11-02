import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API_KEY } from '../../API'
import { usePerson } from '../../Hooks/UsePerson'
import { Loader } from '../UI/Loader'

export const Person = () => {
	const {
		person,
		setPerson,
		language,
		saveLanguage,
		openShowFullText,
		setOpenShowFullText,
		getPerson
	} = usePerson()
	const [showImage, setShowImage] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			setShowImage(true)
		}, 2000)
	}, [])

	const { personId } = useParams()

	useEffect(() => {
		getPerson(API_KEY, personId, language).then((data) => setPerson(data))
		window.scrollTo(0, 0)
	}, [language, personId])
	return (
		<>
			<div className='person border-2 border-solid mt-[65px] border-gray-600 w-full border-r-0 border-l-0 py-9 h-[120vh]'>
				<div className='container flex items-start gap-10'>
					<div className='pLefts'>
						<div className='image-conte w-[300px] h-[450px] rounded-lg overflow-hidden'>
							{showImage ? (
								<img
									className=' object-cover'
									src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${person.profile_path}`}
									alt=''
								/>
							) : (
								<div className='flex items-center justify-center w-full h-full'>
									<Loader />
								</div>
							)}
						</div>
						<div className='l-Block flex flex-col items-start mt-10'>
							<h4 className=' text-xl leading-9 font-bold'>
								{saveLanguage ? 'Персональная информация' : 'Personal Info'}
							</h4>
							<div className='flex flex-col items-start mt-3'>
								<div className=' mb-3 flex flex-col items-start'>
									<h4 className='text-lg leading-5 font-semibold'>
										{saveLanguage ? 'Известен тем' : 'Known For'}
									</h4>
									<h5 className='text-base'>{person.known_for_department}</h5>
								</div>
								<div className=' mb-3 flex flex-col items-start'>
									<h4 className='text-lg leading-5 font-semibold'>
										{saveLanguage ? 'Известные заслуги' : '	Known Credits'}
									</h4>
									<h5 className='text-base'>123</h5>
								</div>
								<div className=' mb-3 flex flex-col items-start'>
									<h4 className='text-lg leading-5 font-semibold'>
										{saveLanguage ? 'Пол' : 'Gender'}
									</h4>
									<h5 className='text-base'>
										{person.gender === 2 ? 'Male' : 'Female'}
									</h5>
								</div>
								<div className=' mb-3 flex flex-col items-start'>
									<h4 className='text-lg leading-5 font-semibold'>
										{saveLanguage ? 'Дата рождения' : 'Birthday'}
									</h4>
									<h5 className='text-base'>
										{person.birthday} (
										<span>
											{Math.abs(
												person.birthday && person.birthday.slice(0, 4) - 2023
											)}{' '}
											years old
										</span>
										)
									</h5>
								</div>
								<div className=' mb-3 flex flex-col items-start'>
									<h4 className='text-lg leading-5 font-semibold'>
										{saveLanguage ? 'Место рождения' : 'Place of Birth'}
									</h4>
									<h5 className='text-base'>{person.place_of_birth}</h5>
								</div>
								<div className=' mb-3 flex flex-col items-start'>
									<h4 className='text-lg mb-1 leading-5 font-semibold'>
										{saveLanguage ? 'Также известен как' : 'Also Known As'}
									</h4>
									{person.also_known_as &&
										person.also_known_as.map((el) => (
											<span className='text-base font-normal mb-1'>{el}</span>
										))}
								</div>
							</div>
						</div>
					</div>
					<div className='pRight py-4 w-full'>
						<h2 className='text-4xl font-bold'>{person.name}</h2>
						<div className='flex mt-[30px] flex-col items-start w-full'>
							<h4 className='text-xl font-semibold my-2'>
								{saveLanguage ? 'Биография' : 'Biography'}
							</h4>
							<div className='w-[890px] fade-text'>
								<div
									style={{
										height: openShowFullText
											? saveLanguage
												? '590px'
												: '432px'
											: person.biography && person.biography.length > 2000
											? 630
											: 500,
										overflowY: openShowFullText ? 'auto' : 'hidden',
										transition: 'all .55s'
									}}
									className='show-fade relative'
								>
									<div>
										<p className='leading-[22px]  pb-[22px] text-base '>
											{person.biography && person.biography.length > 0 ? (
												<p>{person.biography}</p>
											) : (
												<p>
													{person.biography
														? person.biography
														: 'Биография отсутствует на этом языке '}
												</p>
											)}
										</p>
										<div>
											{}
										</div>
										{person.biography && person.biography.length > 2000 && (
											<div
												style={{
													background: `linear-gradient(90deg,${
														openShowFullText ? '#000000' : 'transparent'
													}, ${openShowFullText ? 'transparent' : 'white'})`,
													borderRadius: openShowFullText ? '10px' : '',
													transition: 'all .75s'
												}}
												className='read-more absolute flex justify-end bottom-0 left-0 w-[100%]'
											>
												<button
													onClick={() => setOpenShowFullText(!openShowFullText)}
													className='text-lg font-semibold height-[17px] text-[#00b5e7]'
												>
													{openShowFullText ? (
														<span>{saveLanguage ? 'Закрыть' : 'hide'}</span>
													) : (
														<span>
															{saveLanguage ? 'Читать далее' : 'Read More'}
														</span>
													)}
												</button>
											</div>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
