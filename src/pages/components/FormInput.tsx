import { Form, Input } from 'antd'
import React from 'react'
import EyeIcon from '../../components/icons/EyeIcon'
import EyeIconHide from '../../components/icons/EyeIconHide'

interface FormInputType {
	onChange?: any
	rules?: any
	name: string
	label?: string
	placeholder?: string
	type?: string
	disabled?: boolean
	hidden?: boolean
	dependencies?: any
}

const FormInput: React.FC<FormInputType> = ({
	onChange,
	rules,
	label,
	name,
	type,
	placeholder,
	disabled,
	hidden,
	dependencies,
}) => {
	return (
		<>
			<Form.Item
				label={label}
				name={name}
				rules={rules}
				className={`form-input ${hidden ? 'input-hidden' : ''}`}
				dependencies={dependencies}
			>
				{type === 'password' ? (
					<Input.Password
						disabled={disabled}
						hidden={hidden}
						name={name}
						onChange={onChange}
						placeholder={placeholder}
						iconRender={(visible) => (visible ? <EyeIcon /> : <EyeIconHide />)}
					/>
				) : (
					<Input
						disabled={disabled}
						hidden={hidden}
						name={name}
						onChange={onChange}
						placeholder={placeholder}
					/>
				)}
			</Form.Item>
		</>
	)
}

export default FormInput
