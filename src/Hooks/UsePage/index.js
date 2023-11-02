import { createContext, useContext, useState } from 'react'
const PageContext = createContext()

export const usePage = () => {
	return useContext(PageContext)
}

export const PageProvider = ({ children }) => {
	const [page, setPage] = useState(1)

	const handleNextPage = () => {
		setPage(page + 1)
	}
	const handlePreviousPage = () => {
		if (page > 1) {
			setPage(page - 1)
		}
	}
	const handleFirstPage = () => {
		setPage(1)
	}

	return (
		<PageContext.Provider
			value={{
				page,
				setPage,
				handleNextPage,
				handlePreviousPage,
				handleFirstPage
			}}
		>
			{children}
		</PageContext.Provider>
	)
}
