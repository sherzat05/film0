import { createContext, useContext, useState } from 'react'
import { useLanguage } from '../UseLanguage'
import { useApp } from '../UseApp'
import { useNavigate } from 'react-router-dom'
const HeaderContext = createContext()
export const useHeader = () => {
	return useContext(HeaderContext)
}
export const HeaderProvider = ({ children, isAuthenticated, setShowModal }) => {
	const { setIsAuthenticated, setSaveAuthUp } = useApp()
	const { language, changeLanguage, saveLanguage } = useLanguage()
	const [open, setOpen] = useState([false, false])
	const [openNavigate, setOpenNavigate] = useState(false)
	const handleLanguageChange = (event) => {
		const newLanguage = event.target.value
		changeLanguage(newLanguage)
	}
	const navigate = useNavigate()

	const handleLogOut = () => {
		localStorage.removeItem('isAuthenticated')
		setIsAuthenticated(false)
		navigate('/')
	}
	const handleDeleteAccount = () => {
		localStorage.removeItem('username')
		localStorage.removeItem('password')
		localStorage.removeItem('email')
		localStorage.removeItem('isAuthenticated')
		setIsAuthenticated(false)
		setSaveAuthUp(false)
		navigate('/')
	}

	const handleDropDown = (id) => {
		let newArr = [...open]
		newArr[id] = !open[id]
		setOpen(newArr)
	}

	const closeDropdown = () => {
		setOpen([false, false])
	}
	return (
		<HeaderContext.Provider
			value={{
				isAuthenticated,
				setShowModal,
				setIsAuthenticated,
				setSaveAuthUp,
				language,
				changeLanguage,
				saveLanguage,
				open,
				setOpen,
				openNavigate,
				setOpenNavigate,
				handleLanguageChange,
				navigate,
				handleLogOut,
				handleDeleteAccount,
				handleDropDown,
				closeDropdown
			}}
		>
			{children}
		</HeaderContext.Provider>
	)
}
