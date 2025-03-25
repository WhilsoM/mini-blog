import styles from './Footer.module.css'

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.copyright}>© 2024 MyBlog</div>
				<div className={styles.links}>
					<a href='#' className={styles.link}>
						О проекте
					</a>
					<a href='#' className={styles.link}>
						Правила
					</a>
					<a href='#' className={styles.link}>
						Помощь
					</a>
					<a href='#' className={styles.link}>
						Связаться
					</a>
				</div>
			</div>
		</footer>
	)
}
