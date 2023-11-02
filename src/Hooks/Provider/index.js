import React from 'react'
import { LanguageProvider } from '../UseLanguage'
import { PageProvider } from '../UsePage'
import { PopularProvider } from '../UsePopular'
import { RatedProvider } from '../UseRated'
import { DetailsProvider } from '../UseMovieDetails'
import { PersonProvider } from '../UsePerson'

const AppProviders = ({ children }) => {
	return (
		<LanguageProvider>
			<PageProvider>
				<PopularProvider>
					<RatedProvider>
						<DetailsProvider>
							<PersonProvider>{children}</PersonProvider>
						</DetailsProvider>
					</RatedProvider>
				</PopularProvider>
			</PageProvider>
		</LanguageProvider>
	)
}

export default AppProviders
