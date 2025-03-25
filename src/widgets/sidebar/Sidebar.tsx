import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Sidebar.module.css'

export const Sidebar: React.FC = () => {
	return (
		<aside className={styles.sidebar}>
			<nav className={styles.navigation}>
				<ul className={styles.navList}>
					<li className={styles.navItem}>
						<NavLink to='/' className={styles.navLink}>
							Главная
						</NavLink>
					</li>
					<li className={styles.navItem}>
						<NavLink to='/profile' className={styles.navLink}>
							Профиль
						</NavLink>
					</li>
				</ul>
			</nav>
		</aside>
	)
}
