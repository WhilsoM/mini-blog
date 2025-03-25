import { Home } from 'pages/home'
import { PostById } from 'pages/postById'
import { Profile } from 'pages/profile'
import { Route, Routes } from 'react-router-dom'
import { SearchProvider } from 'shared/context/SearchContext'
import { Layout } from './Layout'

export const App = () => {
	return (
		<SearchProvider>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='profile' element={<Profile />} />
					<Route path='post/:id' element={<PostById />} />
				</Route>
			</Routes>
		</SearchProvider>
	)
}
