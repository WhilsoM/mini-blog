import { createContext, ReactNode, useContext, useState } from 'react'

type SearchContextType = {
	searchInputText: string
	setSearchInputText: (text: string) => void
}

const SearchContext = createContext<SearchContextType | undefined>(undefined)

export const SearchProvider = ({ children }: { children: ReactNode }) => {
	const [searchInputText, setSearchInputText] = useState('')

	return (
		<SearchContext.Provider value={{ searchInputText, setSearchInputText }}>
			{children}
		</SearchContext.Provider>
	)
}

export const useSearch = () => {
	const context = useContext(SearchContext)
	if (context === undefined) {
		throw new Error('useSearch must be used within a SearchProvider')
	}
	return context
}
