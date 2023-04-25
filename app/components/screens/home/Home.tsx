import { FC } from 'react'

import Meta from '@/utils/meta/Meta'

import styles from './Home.module.scss'

const Home: FC = () => {
	return (
		<Meta title='Home' description='This is the portfolio application.'>
			<section className={styles.hero}>
				<div className='container'>
					<h1 className={styles.title}>Itsaln Chat Gpt</h1>
					<p className={styles.description}>Ask me your any question</p>

				</div>
			</section>
		</Meta>
	)
}

export default Home
