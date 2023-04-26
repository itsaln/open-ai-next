import axios from '@/api/interceptors'

import { getChatGptUrl } from '@/config/api.config'

import { IGptQuestion } from '@/shared/types/gtp-question.types'

export const ChatGptService = {
	async getAnswer(data: IGptQuestion) {
		return axios.post(getChatGptUrl('/message'), data)
	}
}
