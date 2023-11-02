import { createContext, useContext, useState, useEffect } from 'react'
const LanguageContext = createContext()
export const useLanguage = () => {
	return useContext(LanguageContext)
}
export const LanguageProvider = ({ children }) => {
	const [language, setLanguage] = useState('en-US')

	const saveLanguage = language === 'ru-RU'

	useEffect(() => {
		const savedLanguage = localStorage.getItem('selectedLanguage')
		if (savedLanguage) {
			setLanguage(savedLanguage)
		}
	}, [])

	const changeLanguage = (newLanguage) => {
		setLanguage(newLanguage)
		localStorage.setItem('selectedLanguage', newLanguage)
	}

	return (
		<LanguageContext.Provider
			value={{ language, changeLanguage, setLanguage, saveLanguage }}
		>
			{children}
		</LanguageContext.Provider>
	)
}
