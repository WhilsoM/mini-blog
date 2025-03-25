import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

export const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.logo}>
					<NavLink to='/' className={styles.logoLink}>
						MyBlog
					</NavLink>
				</div>
				<div className={styles.search}>
					<input
						type='text'
						placeholder='Поиск...'
						className={styles.searchInput}
					/>
				</div>
			</div>
		</header>
	)
}
