import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation, useQuery } from '@tanstack/react-query'

import Field from '@/ui/form-elements/Field'

import { IGptQuestion } from '@/shared/types/gtp-question.types'

import Meta from '@/utils/meta/Meta'

import styles from './Home.module.scss'
import { ChatGptService } from '@/services/chat-gpt.service'

const Home: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm<IGptQuestion>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IGptQuestion> = (data) => {
		console.log('submit', data)
		const {} = useQuery('get answer', () => ChatGptService.getAnswer(data), {
			onSuccess(data) {
				console.log('success data', data)
			}
		})
	}

	return (
		<Meta title='Home' description='This is the portfolio application.'>
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
						<button type='submit' className='btn-black'>
							Send
						</button>
					</form>

					<div className={styles.result}>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. A autem
							doloribus enim est eveniet expedita fugiat magni maxime mollitia
							nam nostrum odio pariatur perspiciatis praesentium quae quam, quis
							quo reprehenderit sequi similique, unde veniam vero voluptates. A
							debitis ipsa minima, nihil nobis odio quo saepe sed sit voluptas?
							Dolor, earum ex ipsum iste maiores minus molestiae sit voluptate.
							Ab, accusantium alias aperiam autem beatae dignissimos eligendi,
							est maiores nulla obcaecati odit perferendis provident quam rerum
							similique vel voluptate voluptatem. Commodi cumque et fugiat
							laudantium, molestiae neque obcaecati pariatur provident quas, qui
							quidem tenetur voluptate. Facilis, laborum, optio! Eius, neque,
							qui.
						</p>
					</div>
				</div>
			</section>
		</Meta>
	)
}

export default Home
