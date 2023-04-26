import Link from 'next/link'
import { FC } from 'react'
import { FiExternalLink } from 'react-icons/fi'

import Logo from '@/ui/logo/Logo'

import styles from './Header.module.scss'

const Header: FC = () => {
	return (
		<div className={styles.header}>
			<div className='container'>
				<div className={styles.wrapper}>
					<Logo />
					<Link
						href='https://itsaln.uz'
						className={styles.link}
						title='Перейти к разработчику'
						target='_blank'
					>
						<FiExternalLink />
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Header
