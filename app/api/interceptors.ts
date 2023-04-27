import axios from 'axios'

import { getContentType } from '@/api/api.helpers'

import { API_SERVER_URL, API_URL } from '@/config/api.config'
import { IS_PRODUCTION } from '@/config/constants'

export const instance = axios.create({
	baseURL: IS_PRODUCTION ? API_SERVER_URL : API_URL,
	headers: getContentType()
})

export default instance
