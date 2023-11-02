import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import { Header, Home, Popular, TopRated, About, Person } from './Components'
import { MovieDetails } from './Pages/movieDetails'
import { LogIn } from './Pages/Auth'
import { AuthModalWindow } from './Pages/AuthModalWindow'
import { useApp } from './Hooks/UseApp'
import { HeaderProvider } from './Hooks/UseHeader'
import AppProviders from './Hooks/Provider'
function App() {
	const {
		isAuthenticated,
		setIsAuthenticated,
		showModal,
		setShowModal,
		username,
		navigate,
		saveAuthUp,
		setSaveAuthUp
	} = useApp()

	return (
		<AppProviders>
			<div className='App'>
				<HeaderProvider
					isAuthenticated={isAuthenticated}
					setShowModal={setShowModal}
				>
					<Header
						saveAuthUp={saveAuthUp}
						setSaveAuthUp={setSaveAuthUp}
						username={username}
						isAuthenticated={isAuthenticated}
						setIsAuthenticated={setIsAuthenticated}
						showModal={showModal}
						setShowModal={setShowModal}
					/>
				</HeaderProvider>
				<main className='mt-[65px]'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/person/:personId' element={<Person />} />
						<Route
							path='/about'
							element={
								isAuthenticated ? (
									<About />
								) : (
									<div>
										{
											<AuthModalWindow
												showModal={showModal}
												setShowModal={setShowModal}
												navigate={navigate}
											/>
										}
										<div
											style={{
												filter: 'blur(15px)',
												overflow: 'hidden'
											}}
										>
											<About className={'overflow-hidden'} />
										</div>
									</div>
								)
							}
						/>
						<Route path='/popular' element={<Popular />} />
						<Route path={'/Login'} element={<LogIn />} />
						<Route path='/topRated' element={<TopRated />} />
						<Route path='/movie/details/:movieId' element={<MovieDetails />} />
					</Routes>
				</main>
			</div>
		</AppProviders>
	)
}

export default App
