import cn from 'clsx'
import Link from 'next/link'
import { FC } from 'react'

import { socials } from '@/ui/social-media/socials.data'

import styles from './SocialMedia.module.scss'

const SocialMedia: FC<{ className?: string }> = ({ className }) => {
	return (
		<div className={cn(styles.nav, className)}>
			<ul>
				{socials.map((item, index) => (
					<li key={`${item.link}_${index}`}>
						<Link href={item.link}>.{item.name}</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default SocialMedia
