import React, { ReactNode } from 'react'
import styles from './ContentWrapper.module.css'

interface ContentWrapperProps {
	children: ReactNode
}

export const ContentWrapper: React.FC<ContentWrapperProps> = ({ children }) => {
	return (
		<main className={styles.contentWrapper}>
			<div className={styles.content}>{children}</div>
		</main>
	)
}
