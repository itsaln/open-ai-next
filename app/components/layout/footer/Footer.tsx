import Link from 'next/link'
import { FC } from 'react'

import SocialMedia from '@/ui/social-media/SocialMedia'

import styles from './Footer.module.scss'

const Footer: FC = () => {
	return (
		<div className={styles.footer}>
			<div className='container'>
				<div className={styles.footer_bottom}>
					<div className={styles.logo_text}>ITSALN Development 2023</div>
					<div className={styles.bottom_menu}>
						<span className='mr-6 xl:mr-8'>Cookies</span>
						<ul>
							<li>
								<Link href={'/'}>Privacy Policy</Link>
							</li>
							<li>
								<Link href={'/'}>Terms of Use</Link>
							</li>
						</ul>
					</div>
					<SocialMedia className='order-1 lg:order-2 xl:order-3 mx-0 xl:ml-auto mb-6 lg:mb-14 xl:mb-0' />
				</div>
			</div>
		</div>
	)
}

export default Footer
