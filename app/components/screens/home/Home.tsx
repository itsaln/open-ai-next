import { FC } from 'react'
import { useForm } from 'react-hook-form'
import Typewriter from 'typewriter-effect'

import { useGetAnswer } from '@/screens/home/useGetAnswer'

import SkeletonLoader from '@/ui/SkeletonLoader'
import Field from '@/ui/form-elements/Field'

import { IGptQuestion } from '@/shared/types/gtp-question.types'

import Meta from '@/utils/meta/Meta'

import styles from './Home.module.scss'

const Home: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm<IGptQuestion>({
		mode: 'onChange'
	})

	const { onSubmit, answers, isLoading } = useGetAnswer()

	return (
		<Meta
			title='Home'
			description='Chat GPT is a revolutionary chatbot application that helps people have more meaningful conversations in their everyday lives.'
		>
			<section
				className={styles.hero}
				style={{
					backgroundImage: `url('./images/hero/001.jpg')`
				}}
			>
				<div className='container'>
					<h1 className={styles.title}>Itsaln Chat Gpt</h1>
					<p className={styles.description}>Ask me your any question</p>
					<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
						<Field
							{...register('question', {
								required: 'Question is required!'
							})}
							placeholder='Question'
							error={errors.question}
						/>
						<button type='submit' className='btn-primary' disabled={isLoading}>
							Send
						</button>
					</form>

					{isLoading ? (
						<SkeletonLoader height={26} />
					) : (
						answers && (
							<div className={styles.result}>
								{answers.map((answer, index) => (
									<Typewriter
										key={`${answer.text}_${index}`}
										onInit={(typewriter) => {
											typewriter.typeString(answer.text).start()
										}}
									/>
								))}
							</div>
						)
					)}
				</div>
			</section>
		</Meta>
	)
}

export default Home
