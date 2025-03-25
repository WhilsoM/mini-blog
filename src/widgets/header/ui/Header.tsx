import { NavLink } from 'react-router-dom'
import { useSearch } from 'shared/context/SearchContext'
import styles from './Header.module.css'
import { SearchInput } from './SearchInput'

export const Header = () => {
	const { searchInputText } = useSearch()

	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.logo}>
					<NavLink to='/' className={styles.logoLink}>
						MyBlog
					</NavLink>
				</div>
				<div className={styles.search}>
					<SearchInput />
				</div>
				<nav className={styles.nav}>
					<ul className={styles.navList}>
						<li className={styles.navItem}>
							<NavLink
								to='/'
								className={({ isActive }) =>
									isActive ? styles.navLinkActive : styles.navLink
								}
							>
								Главная
							</NavLink>
						</li>
						<li className={styles.navItem}>
							<NavLink
								to='/profile'
								className={({ isActive }) =>
									isActive ? styles.navLinkActive : styles.navLink
								}
							>
								Профиль
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}
