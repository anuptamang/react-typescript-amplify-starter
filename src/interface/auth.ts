export interface SignupType {
	userName: string
	password: string
	fullName: string
	role: string
}

export interface SigninType {
	email: string
	password: string
}

export interface ForgotPasswordType {
	userName: string
}
