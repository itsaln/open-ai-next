import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import logoImage from '@/assets/images/logo.svg'

import styles from './Logo.module.scss'

const Logo: FC = () => {
	return (
		<Link href='/' className={styles.logo}>
			<Image src={logoImage} alt='Logo' />
		</Link>
	)
}

export default Logo
