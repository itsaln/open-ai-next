import axios from 'axios'

import { getContentType } from '@/api/api.helpers'

import { API_SERVER_URL, API_URL } from '@/config/api.config'

// export const axiosClassic = axios.create({
// 	baseURL: IS_PRODUCTION ? API_SERVER_URL : API_URL,
// 	headers: {
// 		'Content-Type': 'application/json',
// 		'Accept-Encoding': 'gzip'
// 	}
// })

export const instance = axios.create({
	baseURL: API_URL,
	headers: getContentType()
})

export default instance
