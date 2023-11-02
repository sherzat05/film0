import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../Image/logo.svg'

import { BsFillPersonFill } from 'react-icons/bs'
import { useHeader } from '../../Hooks/UseHeader'

export const Header = () => {
	const {
		isAuthenticated,
		setShowModal,
		setIsAuthenticated,
		language,
		saveLanguage,
		open,
		openNavigate,
		setOpenNavigate,
		handleLanguageChange,
		navigate,
		handleLogOut,
		handleDeleteAccount,
		handleDropDown,
		closeDropdown
	} = useHeader()

	return (
		<>
			<div className='header fixed w-full top-0 left-0 z-50'>
				<div className='header--container'>
					<div className='flex items-center gap-9'>
						<NavLink className=' w-[140px]' to='/'>
							<img src={Logo} alt='' />
						</NavLink>
						<div className='header--navbar text-[15px]'>
							<div className=' relative'>
								<h4
									onMouseOver={() => setOpenNavigate(true)}
									onMouseOut={() => setOpenNavigate(false)}
									onClick={() => setOpenNavigate(true)}
									className='text-white text-base cursor-pointer'
								>
									Movie
								</h4>
								<div
									onMouseOver={() => setOpenNavigate(true)}
									onMouseOut={() => setOpenNavigate(false)}
									style={{
										boxShadow: '0 0 5px black',
										padding: '10px 10px 10px 10px',
										visibility: openNavigate ? 'visible' : 'hidden',
										opacity: openNavigate ? 1 : 0,
										transition: 'all .55s,visibility 1ms'
									}}
									className='absolute rounded-[6px] top-5 w-[200px] h-[110px] flex items-start gap-1 flex-col bg-white'
								>
									<NavLink
										onClick={() => setOpenNavigate(false)}
										className=' hover:bg-gray-200 pl-3 py-2 rounded-md w-full text-base text-black'
										to={'/popular'}
									>
										{saveLanguage ? 'Популярные' : 'Popular'}
									</NavLink>
									<NavLink
										onClick={() => setOpenNavigate(false)}
										className=' hover:bg-gray-200 pl-3 py-2 rounded-md w-full text-base text-black'
										to={'/topRated'}
									>
										{saveLanguage ? 'Высший рейтинг' : 'Top Rated'}
									</NavLink>
								</div>
							</div>
							<NavLink
								onClick={() => {
									setTimeout(() => {
										setShowModal(true)
									}, 400)
								}}
								to={'/about'}
								className='header--navbar__link'
							>
								About
							</NavLink>
						</div>
					</div>
					<div className='header--search'>
						{!isAuthenticated ? (
							<NavLink to={'/Login'}>
								<button
									onClick={() => {
										setTimeout(() => {
											setShowModal(false)
										}, 400)
									}}
									className='border-0 text-white uppercase'
								>
									{saveLanguage ? 'Войти' : 'Sign In'}
								</button>
							</NavLink>
						) : (
							<div className='relative'>
								<div
									onClick={() => handleDropDown(0)}
									className='circs cursor-pointer w-9 h-9 rounded-[50%] flex items-center text-center justify-center border border-solid border-white'
								>
									<BsFillPersonFill className='text-white text-xl' />
								</div>
								<div
									style={{
										transform: open[0] ? 'translateY(0)' : 'translateY(-40vh)',
										transition: 'all .85s'
									}}
									className='left-0 absolute z-20 top-20 w-80  bg-white shadow border rounded border-gray-200 py-4 flex justify-start items-start flex-col'
								>
									<div className='px-4 flex justify-start items-center space-x-4'>
										<div>
											<BsFillPersonFill className='text-2xl' />
										</div>
										<div className='flex justify-start items-start flex-col space-y-2'>
											<p className='text-sm font-medium leading-3 text-gray-700'>
												Head
											</p>
											<p className='text-xs leading-3 text-gray-600'>
												{'lr.arek.2007@gmail.com'}
											</p>
										</div>
									</div>
									<div onClick={closeDropdown}>
										<button className='mt-4 flex justify-start items-center text-gray-600 hover:bg-blue-50 focus:bg-blue-100  space-x-2 px-4  py-2 focus:outline-none hover:text-blue-700 focus:text-blue-700 rounded w-full'>
											<svg
												width={14}
												height={14}
												viewBox='0 0 14 14'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
											>
												<path
													d='M6.99935 6.41667C7.46084 6.41667 7.91196 6.27982 8.29568 6.02343C8.67939 5.76704 8.97846 5.40262 9.15507 4.97626C9.33167 4.5499 9.37788 4.08075 9.28785 3.62812C9.19782 3.1755 8.97559 2.75974 8.64926 2.43342C8.32294 2.1071 7.90718 1.88487 7.45456 1.79484C7.00194 1.7048 6.53278 1.75101 6.10642 1.92762C5.68006 2.10422 5.31564 2.40329 5.05925 2.787C4.80286 3.17072 4.66602 3.62184 4.66602 4.08333C4.66602 4.70217 4.91185 5.29567 5.34943 5.73325C5.78702 6.17084 6.38051 6.41667 6.99935 6.41667Z'
													fill='currentColor'
												/>
												<path
													d='M10.4994 12.2499C10.6541 12.2499 10.8024 12.1885 10.9118 12.0791C11.0212 11.9697 11.0827 11.8213 11.0827 11.6666C11.0827 10.5836 10.6525 9.54501 9.8867 8.77923C9.12093 8.01346 8.08232 7.58325 6.99935 7.58325C5.91638 7.58325 4.87777 8.01346 4.112 8.77923C3.34622 9.54501 2.91602 10.5836 2.91602 11.6666C2.91602 11.8213 2.97747 11.9697 3.08687 12.0791C3.19627 12.1885 3.34464 12.2499 3.49935 12.2499H10.4994Z'
													fill='currentColor'
												/>
											</svg>
											<p className='text-sm leading-3 '>My Account</p>
										</button>
									</div>
									<div onClick={closeDropdown}>
										<button className='mt-2 flex justify-start items-center  text-gray-600 hover:bg-blue-50 focus:bg-blue-100 space-x-2 px-4 py-2 focus:outline-none hover:text-blue-700 focus:text-blue-700 rounded w-full'>
											<svg
												width={14}
												height={14}
												viewBox='0 0 14 14'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
											>
												<path
													d='M7 7.875C7.48325 7.875 7.875 7.48325 7.875 7C7.875 6.51675 7.48325 6.125 7 6.125C6.51675 6.125 6.125 6.51675 6.125 7C6.125 7.48325 6.51675 7.875 7 7.875Z'
													fill='currentColor'
												/>
												<path
													d='M12.769 6.02008L12.3082 4.55008C12.2584 4.38019 12.1749 4.22206 12.0628 4.08512C11.9506 3.94818 11.8119 3.83524 11.6552 3.75304C11.4984 3.67083 11.3266 3.62105 11.1502 3.60665C10.9737 3.59226 10.7962 3.61355 10.6282 3.66925L10.4298 3.73341C10.2745 3.78477 10.109 3.79781 9.94748 3.7714C9.78598 3.74499 9.63326 3.67992 9.50234 3.58175L9.43817 3.53508C9.31041 3.4373 9.20743 3.31086 9.13751 3.16597C9.06759 3.02107 9.03271 2.86177 9.03567 2.70091V2.53758C9.03851 2.17126 8.89584 1.81879 8.639 1.55758C8.51684 1.43418 8.3715 1.33613 8.21133 1.26905C8.05116 1.20198 7.87932 1.16722 7.70567 1.16675H6.21817C5.86127 1.17136 5.52065 1.31678 5.27046 1.57134C5.02027 1.8259 4.88077 2.16899 4.88234 2.52591V2.66591C4.88178 2.83524 4.84323 3.00228 4.76953 3.15473C4.69583 3.30717 4.58886 3.44114 4.4565 3.54675L4.38067 3.60508C4.23445 3.71569 4.06343 3.78892 3.88248 3.8184C3.70152 3.84789 3.5161 3.83273 3.34234 3.77425C3.18275 3.71902 3.01361 3.69675 2.84516 3.70878C2.67671 3.72081 2.51246 3.7669 2.36234 3.84425C2.20604 3.92182 2.06737 4.03074 1.95497 4.16421C1.84257 4.29768 1.75885 4.45286 1.709 4.62008L1.23067 6.13675C1.11975 6.4787 1.14819 6.8506 1.30983 7.1717C1.47148 7.4928 1.75326 7.73717 2.094 7.85175H2.18734C2.34452 7.91065 2.4856 8.00579 2.59912 8.12945C2.71263 8.2531 2.79539 8.40178 2.84067 8.56341L2.87567 8.65675C2.9407 8.83532 2.96244 9.02678 2.93912 9.21539C2.9158 9.404 2.84807 9.58439 2.7415 9.74175C2.5258 10.0355 2.43481 10.4026 2.48834 10.7631C2.54187 11.1236 2.73558 11.4483 3.02734 11.6667L4.23484 12.5826C4.46348 12.7488 4.73967 12.8368 5.02234 12.8334C5.09799 12.8408 5.17418 12.8408 5.24984 12.8334C5.4249 12.7995 5.59122 12.7303 5.73865 12.63C5.88608 12.5297 6.01153 12.4005 6.10734 12.2501L6.2415 12.0576C6.33562 11.9226 6.46015 11.8116 6.60505 11.7336C6.74995 11.6555 6.91116 11.6127 7.07567 11.6084C7.24808 11.6042 7.41875 11.6437 7.57176 11.7232C7.72477 11.8028 7.85513 11.9198 7.95067 12.0634L8.02067 12.1626C8.12013 12.3106 8.24883 12.4367 8.39886 12.5331C8.54888 12.6295 8.71706 12.6942 8.89302 12.7231C9.06898 12.7521 9.249 12.7447 9.42201 12.7015C9.59502 12.6583 9.75735 12.5801 9.899 12.4717L11.0832 11.5851C11.3632 11.3676 11.5493 11.0513 11.6036 10.701C11.6578 10.3506 11.576 9.99284 11.3748 9.70091L11.2232 9.47925C11.132 9.33833 11.0722 9.17939 11.0481 9.01328C11.0239 8.84717 11.0359 8.67781 11.0832 8.51675C11.1314 8.34434 11.2208 8.18626 11.3438 8.05616C11.4668 7.92607 11.6196 7.82788 11.789 7.77008L11.9057 7.72925C12.2433 7.61211 12.5221 7.3683 12.6832 7.04935C12.8443 6.7304 12.8751 6.36131 12.769 6.02008ZM6.99984 9.04175C6.59603 9.04175 6.2013 8.92201 5.86555 8.69767C5.5298 8.47332 5.26811 8.15446 5.11358 7.78139C4.95905 7.40833 4.91862 6.99782 4.9974 6.60177C5.07618 6.20573 5.27063 5.84194 5.55616 5.55641C5.84169 5.27087 6.20548 5.07642 6.60153 4.99764C6.99757 4.91887 7.40808 4.9593 7.78115 5.11383C8.15421 5.26836 8.47308 5.53004 8.69742 5.86579C8.92176 6.20154 9.0415 6.59628 9.0415 7.00008C9.0415 7.54156 8.8264 8.06087 8.44351 8.44376C8.06063 8.82664 7.54132 9.04175 6.99984 9.04175Z'
													fill='currentColor'
												/>
											</svg>
											<p className='text-sm leading-3 '>Settings</p>
										</button>
									</div>
									<div className='flex'>
										<button
											onClick={() => {
												setIsAuthenticated(false)
												navigate('/')
												handleLogOut()
												closeDropdown()
											}}
											className='px-4 mt-8 text-sm leading-3 text-gray-600'
										>
											{saveLanguage ? 'Выйти' : 'Sign Out'}
										</button>
										<button
											onClick={handleDeleteAccount}
											className='px-4 mt-8 text-sm leading-3 text-gray-600'
										>
											{saveLanguage ? 'Удалить Аккаунт' : 'Delete Account'}
										</button>
									</div>
								</div>
							</div>
						)}
						<div className='select--language rounded-3xl py-[4px] px-[14px] bg-[#05b4e3] '>
							<select
								onChange={handleLanguageChange}
								value={language}
								className=' text-white'
								name='language'
								id='selects'
							>
								<option
									className='text-white bg-[#05b4e3] outline-0'
									value='en-US'
								>
									EN
								</option>
								<option
									className='text-white bg-[#05b4e3] outline-0'
									value='ru-RU'
								>
									RU
								</option>
							</select>
						</div>
						<div className='flex items-center gap-3'>
							<input className='searchInputs w-[200px]' type='text' />
							<button className='border-2 border-solid border-[#05b4e3] py-[6px] px-[18px] text-white text-lg rounded-lg'>
								{saveLanguage ? 'Поиск' : 'Search'}
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
