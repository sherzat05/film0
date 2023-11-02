import React, { useState } from 'react'
import '../../Style/Auth.scss'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { SignIn } from '../UI/SignIn'
import { SignUp } from '../UI/SignUp'
import { useApp } from '../../Hooks/UseApp'
export const LogIn = () => {
	const { saveLanguage } = useApp()
	const [log, setLog] = useState(false)
	function openSig() {
		setLog(!log)
	}
	function openLog() {
		setLog(false)
	}
	return (
		<>
			<div className='logs h-[93vh] w-full bg-[#032541] border-t border-solid border-white'>
				<div className='logs--container flex items-start justify-center h-full'>
					<div
						id='wrapper'
						style={{
							maxHeight: log ? '644px' : '584px',
							transition: 'all .55s'
						}}
					>
						<div id='table' className='mb-[4em] flex relative'>
							<hr
								className=' absolute bottom-0 left-0 bg-[#1061ee] h-[1.6px]'
								style={{
									width: saveLanguage && log ? '180px' : '65px',
									transform: log ? 'translateX(98px)' : 'translateX(0)',
									transition: 'all .55s'
								}}
							/>
							<button onClick={openLog} className={`${log ? '' : 'active'}`}>
								{saveLanguage ? 'Войти' : 'Sign in'}
							</button>
							<button onClick={openSig} className={`${log ? 'active' : ''}`}>
								{saveLanguage ? 'Зарегистрироваться' : 'Sign Up'}
							</button>
						</div>
						<div
							className='flex items-start w-full overflow-hidden h-[430px]'
							style={{
								transformStyle: 'preserve-3d'
							}}
						>
							<TransitionGroup
								className={'w-full min-w-full'}
								style={{
									transform: log ? 'rotateY(-270deg)' : 'rotateY(0deg)',
									transition: 'all .85s',
									transformOrigin: 'right'
								}}
							>
								<CSSTransition in={!log} timeout={700} className={'left'}>
									<SignIn />
								</CSSTransition>
							</TransitionGroup>
							<TransitionGroup
								className={'w-full min-w-full absolute left-0'}
								style={{
									transform: log ? 'rotateY(0)' : 'rotateY(-270deg)',
									transformOrigin: 'left',
									transition: 'all .85s'
								}}
							>
								<CSSTransition
									in={log}
									timeout={700}
									className={' -translate-x-[200px]'}
								>
									<SignUp />
								</CSSTransition>
							</TransitionGroup>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
