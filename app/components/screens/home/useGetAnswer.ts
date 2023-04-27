import { useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { useMutation } from 'react-query'

import { ChatGptService } from '@/services/chat-gpt.service'

import { IGptQuestion } from '@/shared/types/gtp-question.types'

interface IGptAnswer {
	finish_reason: string
	index: number
	logprobs: any
	text: string
}

export const useGetAnswer = () => {
	const [answers, setAnswers] = useState<IGptAnswer[] | null>(null)

	const { mutateAsync, isLoading } = useMutation(
		'get answer',
		(data: IGptQuestion) => ChatGptService.getAnswer(data),
		{
			onSuccess: async ({ data }) => {
				setAnswers(data)
			}
		}
	)

	const onSubmit: SubmitHandler<IGptQuestion> = async (data) => {
		await mutateAsync(data)
	}

	return { onSubmit, isLoading, answers }
}
