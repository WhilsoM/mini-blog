import { useSearch } from 'shared/context/SearchContext'
import styles from './SearchInput.module.css'

export const SearchInput = () => {
	const { searchInputText, setSearchInputText } = useSearch()

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchInputText(e.target.value)
	}

	return (
		<div className={styles.searchContainer}>
			<input
				type='text'
				className={styles.searchInput}
				placeholder='Поиск...'
				value={searchInputText}
				onChange={handleInputChange}
			/>
			{searchInputText && (
				<button
					className={styles.clearButton}
					onClick={() => setSearchInputText('')}
					aria-label='Очистить поиск'
				>
					&#x2715;
				</button>
			)}
		</div>
	)
}
