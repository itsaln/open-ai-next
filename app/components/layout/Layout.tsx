import { FC, PropsWithChildren } from 'react'

import Footer from '@/layout/footer/Footer'
import Header from '@/layout/header/Header'

import styles from './Layout.module.scss'

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Header />
			<main className={styles.content}>{children}</main>
			<Footer />
		</div>
	)
}

export default Layout
