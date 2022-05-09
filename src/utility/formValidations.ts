import { Rule } from 'antd/lib/form'
import { EIGHTEEN_TO_HUNDRED_REGEX, FULL_NAME_REGEX } from './Regex'

type Validation_Fields =
	| 'userName'
	| 'password'
	| 'rePassword'
	| 'role'
	| 'phone'
	| 'email'
	| 'fullName'

type My_Rules = {
	[key in Validation_Fields]: Rule[]
}

export const VALIDATIONS: My_Rules = {
	userName: [
		{
			message: 'Please enter username',
			required: true,
		},
	],
	password: [
		{ required: true, message: 'Password is required ' },
		{
			min: 8,
			message: 'Password must be at least 8 characters ',
		},

		{
			pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
			message:
				'Password should contain one upper/lowercase with at least one special character and must be alphanumeric',
		},
	],
	rePassword: [
		{
			required: true,
			message: 'Please confirm your password!',
		},
		({ getFieldValue }) => ({
			validator(_, value) {
				if (!value || getFieldValue('newPassword') === value) {
					return Promise.resolve()
				}
				return Promise.reject(
					new Error('The two passwords that you entered do not match!')
				)
			},
		}),
	],
	phone: [{ required: true, message: 'Phone is required ' }],
	role: [{ required: true, message: 'Role is required ' }],
	email: [
		{ required: true, message: 'Email ID is required' },
		{
			type: 'email',
			message: 'Please enter valid email',
		},
	],
	fullName: [{ required: true, message: 'Please enter name.' }],
}
