import cn from 'clsx'
import { FC } from 'react'
import Skeleton, { SkeletonProps } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonLoader: FC<SkeletonProps> = ({ className, ...rest }) => {
	return (
		<Skeleton
			{...rest}
			baseColor='#718193'
			highlightColor='#666980'
			className={cn('rounded-lg', className)}
		/>
	)
}

export default SkeletonLoader
