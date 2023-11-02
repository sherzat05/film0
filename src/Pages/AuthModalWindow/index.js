import React, { useState } from 'react'
import { useLanguage } from '../../Hooks/UseLanguage'
import { Link } from 'react-router-dom'

export const AuthModalWindow = ({ navigate, showModal, setShowModal }) => {
	const { saveLanguage } = useLanguage()
	return (
		<>
			<div
				style={{
					transform: showModal ? 'translateY(0)' : 'translateY(-20vh)',
					transition: 'all .55s'
				}}
				className='modal-window fixed top-3 z-[60] left-[620px] h-[130px] w-[280px] bg-white shadow-md shadow-black'
			>
				<div className='modal-window-content px-3'>
					<h4
						className='text-base leading-5 py-2'
						style={{
							width: saveLanguage ? '100%' : '80%'
						}}
					>
						{saveLanguage
							? 'Для входа на эту страницу необходимо авторизоваться!'
							: 'You must be logged in to enter this page!'}
					</h4>
					<h6 className=' font-semibold'>
						{saveLanguage
							? 'Вы хотите войти в систему?'
							: 'Do you want to log in?'}
					</h6>
					<div className='flex mt-2 w-full gap-5 '>
						<Link to={'/Login'}>
							<button className='text-lg font-bold hover:underline'>
								{saveLanguage ? 'Войти' : 'Sign in'}
							</button>
						</Link>
						<button
							onClick={() => {
								setShowModal(false)
								setTimeout(() => {
									navigate('/')
								}, 500)
							}}
							className='text-lg font-bold hover:underline'
						>
							{saveLanguage ? 'Отмена' : 'Cancel'}
						</button>
					</div>
				</div>
			</div>
		</>
	)
}
