import React from 'react'
import { Button } from 'antd'
import Spinner from './Spinner'

interface Props {
	children?: React.ReactNode
	onClick?: () => void
	htmlType?: 'button' | 'submit' | 'reset' | undefined
	loading?: boolean
	id?: string
	size?: string
}

const Btn: React.FC<Props> = ({
	children,
	onClick,
	htmlType = 'button',
	loading,
	id = '',
	size,
}) => {
	return (
		<Button
			onClick={onClick}
			className={`btn ${size}`}
			htmlType={htmlType}
			id={id}
			disabled={loading}
		>
			{loading ? <Spinner /> : children}
		</Button>
	)
}

export default Btn
