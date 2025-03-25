import { Outlet } from 'react-router-dom'
import { ContentWrapper } from 'widgets/content'
import { Footer } from 'widgets/footer'
import { Header } from 'widgets/header'
import { Sidebar } from 'widgets/sidebar'
import styles from './Layout.module.css'

export const Layout = () => {
	return (
		<div className={styles.appWrapper}>
			<Header />
			<div className={`${styles.mainContent} container`}>
				<Sidebar />
				<ContentWrapper>
					<Outlet />
				</ContentWrapper>
			</div>
			<Footer />
		</div>
	)
}
