import { FC, PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'

import Layout from '@/layout/Layout'

import HeadProvider from '@/providers/HeadProvider/HeadProvider'

import { store } from '@/store/store'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

const MainProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<HeadProvider>
			<Provider store={store}>
				<QueryClientProvider client={queryClient}>
					<Layout>{children}</Layout>
				</QueryClientProvider>
			</Provider>
		</HeadProvider>
	)
}

export default MainProvider
