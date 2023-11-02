import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../../../Hooks/UseApp'

export const SignUp = () => {
	const { saveLanguage, updateSaveAuthUp, setIsAuthenticated } = useApp()
	const navigate = useNavigate()
	const handleSignUp = () => {
		const username = document.getElementById('usernames').value
		const email = document.getElementById('email').value
		const password = document.getElementById('passwords').value

		updateSaveAuthUp({ username, email, password })
		setIsAuthenticated(true)

		localStorage.setItem('isAuthenticated', 'true')
		navigate('/about')
	}

	return (
		<div className='signup'>
			<div action='' className=' mb-[3.3em]'>
				<div className='form-group'>
					<label>{saveLanguage ? 'Имя пользователя' : 'UserName'}</label>
					<input type='text' id='usernames' />
				</div>
				<div className='form-group'>
					<label>{saveLanguage ? 'Электронная почта' : 'Email'}</label>
					<input type='email' id='email' />
				</div>
				<div className='form-group'>
					<label>{saveLanguage ? 'Пароль' : 'Password'}</label>
					<input type='password' id='passwords' />
					<span id='showpwd' className='fa fa-eye-slash'></span>
				</div>
				<button
					id='signUp'
					className='bg-[#1061ee] mt-[14px] w-full text-white py-[10px] px-[14px] rounded-[36px] text-base'
					onClick={() => {
						handleSignUp()
					}}
				>
					{saveLanguage ? 'Зарегистрироваться' : 'Sign up'}
				</button>
			</div>
			<div className='flex flex-col items-center text-center justify-center w-full'>
				<div className='hr'></div>
				<button id='forget-pass'>
					{saveLanguage ? 'Забыли пароль?' : 'Forget Password?'}
				</button>
			</div>
		</div>
	)
}
