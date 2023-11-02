import { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AppcContext = createContext()
export const useApp = () => {
	return useContext(AppcContext)
}

export const AppProvider = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false)
	const [showModal, setShowModal] = useState(false)
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [email, setEmail] = useState('')

	const savedUsername = localStorage.getItem('username') || ''
	const savedPassword = localStorage.getItem('password') || ''
	const savedEmail = localStorage.getItem('email') || ''
	const navigate = useNavigate()

	const [saveAuthUp, setSaveAuthUp] = useState({
		username: savedUsername,
		password: savedPassword,
		email: savedEmail
	})
	const updateSaveAuthUp = (newData) => {
		const updatedData = {
			...saveAuthUp,
			...newData
		}
		setSaveAuthUp(updatedData)

		localStorage.setItem('username', updatedData.username)
		localStorage.setItem('password', updatedData.password)
		localStorage.setItem('email', updatedData.email)
	}

	const handleSignIn = () => {
		console.log('Вход:', username, password)
		if (saveAuthUp.username && saveAuthUp.password) {
			setIsAuthenticated(true)
			setUsername('')
			setPassword('')
			setEmail('')

			localStorage.setItem('isAuthenticated', 'true')

			navigate('/about')
		} else if (!saveAuthUp.username && !saveAuthUp.password) {
			alert('There is no such Account')
			setUsername('')
			setPassword('')
			setEmail('')
			setIsAuthenticated(false)
		} else {
			setIsAuthenticated(false)
		}
	}

	useEffect(() => {
		const savedIsAuthenticated = localStorage.getItem('isAuthenticated')
		if (savedIsAuthenticated === 'true') {
			setIsAuthenticated(true)
		} else {
			setIsAuthenticated(false)
		}

		setTimeout(() => {
			setShowModal(true)
		}, 400)
	}, [])
	return (
		<AppcContext.Provider
			value={{
				isAuthenticated,
				setIsAuthenticated,
				showModal,
				setShowModal,
				username,
				setUsername,
				password,
				setPassword,
				email,
				setEmail,
				savedUsername,
				savedPassword,
				savedEmail,
				navigate,
				saveAuthUp,
				setSaveAuthUp,
				updateSaveAuthUp,
				handleSignIn
			}}
		>
			{children}
		</AppcContext.Provider>
	)
}
