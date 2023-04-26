import cn from 'clsx'
import React, { forwardRef, useState } from 'react'

import { IField } from '@/ui/form-elements/form.interface'

import styles from './Form.module.scss'

const Field = forwardRef<HTMLInputElement, IField>(
	({ placeholder, error, type = 'text', style, ...rest }, ref) => {
		const [currentValue, setCurrentValue] = useState('')

		const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
			setCurrentValue(e.target.value)
		}

		return (
			<div className={styles.field} style={style}>
				<input ref={ref} type={type} {...rest} onChange={handleChange} />
				<label
					className={cn({
						[styles.full]: currentValue
					})}
				>
					{placeholder}
				</label>
				{error && <div className={styles.error}>{error.message}</div>}
			</div>
		)
	}
)

Field.displayName = 'Field'

export default Field
