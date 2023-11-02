import React from 'react'
import { useApp } from '../../../Hooks/UseApp'
export const SignIn = () => {
	const {
		saveLanguage,
		handleSignIn,
		username,
		setUsername,
		password,
		setPassword
	} = useApp()
	return (
		<div id='signin' className=' w-full'>
			<div action='' onSubmit={(e) => e.preventDefault} className='mb-[3.3em]'>
				<div className='form-group'>
					<label>{saveLanguage ? 'Имя пользователя' : 'UserName'}</label>
					<input
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						type='text'
						id='username'
					/>
				</div>
				<div className='form-group'>
					<label>{saveLanguage ? 'Пароль' : 'Password'}</label>
					<input
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						type='password'
						id='pass'
					/>
					<span id='showpwd' className='fa fa-eye-slash'></span>
				</div>
				<button
					onClick={handleSignIn}
					className='bg-[#1061ee] mt-[14px] w-full text-white py-[10px] px-[14px] rounded-[36px] text-base'
				>
					{saveLanguage ? 'Войти' : 'Sign in'}
				</button>
			</div>
			<div className=' w-full text-center flex flex-col items-center justify-center'>
				<div className='hr'></div>
				<button id='froget-pass'>
					{' '}
					{saveLanguage ? 'Забыли пароль?' : 'Forget Password?'}
				</button>
			</div>
		</div>
	)
}
