import { SignupType } from '../../interface/auth'
import {
	CLEAR_SUCCESS,
	CONFIRM_SIGN_UP,
	CREATE_USER,
	CREATE_USER_FAILED,
	CREATE_USER_SUCCESS,
	FORGOT_PASSWORD,
	FORGOT_PASSWORD_FAILED,
	FORGOT_PASSWORD_RESET,
	FORGOT_PASSWORD_RESET_FAILED,
	FORGOT_PASSWORD_RESET_SUCCESS,
	FORGOT_PASSWORD_SUCCESS,
	RESEND_OTP,
	SET_USER,
	SIGN_IN,
	SIGN_IN_CONFIRM_SIGNUP,
	SIGN_IN_FAILED,
	SIGN_IN_SUCCESS,
	SIGN_OUT,
	SIGN_UP_CONFIRMED,
	SIGN_UP_CONFIRMED_FAILED,
	VERIFY_OTP,
	VERIFY_OTP_FAILED,
	VERIFY_OTP_SUCCESS,
} from './constant'

export interface ClearSuccessPayload {
	error: string
	loading: string
	message: any
}
export interface SigninPayload {
	email: string
	password: string
	history?: any
}

export interface SigninSuccessPayload {
	message: string
	userObj?: {
		[key: string]: any
	}
	user: {
		[key: string]: any
	}
}

export interface SigninFailedPayload {
	message: string
}

export type SignIn = {
	type: typeof SIGN_IN
	payload: SigninPayload
}

export type ClearSuccess = {
	type: typeof CLEAR_SUCCESS
	payload: ClearSuccessPayload
}

export type SignInSuccess = {
	type: typeof SIGN_IN_SUCCESS
	payload: SigninSuccessPayload
}

export type SignInFailed = {
	type: typeof SIGN_IN_FAILED
	payload: SigninFailedPayload
}

export interface SignUpConfirmPayload {
	userName: string
	pin: string
	history?: any
}

export interface SignInConfrimSignupPayload {
	email: string
	loading: boolean
	history?: any
}

export interface SignUpConfirmSuccessPayload {
	message: string
}

export interface SignUpConfirmFailedPayload {
	message: string
}

export type SignUpConfirm = {
	type: typeof CONFIRM_SIGN_UP
	payload: SignUpConfirmPayload
}

export type SignInConfirmSignup = {
	type: typeof SIGN_IN_CONFIRM_SIGNUP
	payload: SignInConfrimSignupPayload
}

export type SignUpConfirmSuccess = {
	type: typeof SIGN_UP_CONFIRMED
	payload: SignUpConfirmSuccessPayload
}

export type SignUpConfirmFailed = {
	type: typeof SIGN_UP_CONFIRMED_FAILED
	payload: SignUpConfirmFailedPayload
}

export type SetUser = {
	type: typeof SET_USER
}

export interface SignoutPayload {
	history?: any
}

export type SignOut = {
	type: typeof SIGN_OUT
	payload: SignoutPayload
}

export interface ForgotPasswordPayload {
	userName: string
	history: {
		[key: string]: any
	}
}

export interface ResendOtpPayload {
	userName: any
}

export interface ForgotPasswordSuccessPayload {
	message: string
}

export interface ForgotPasswordFailedPayload {
	message: string
}

export type ForgotPassword = {
	type: typeof FORGOT_PASSWORD
	payload: ForgotPasswordPayload
}

export type ResendOtp = {
	type: typeof RESEND_OTP
	payload: ResendOtpPayload
}

export type ForgotPasswordSuccess = {
	type: typeof FORGOT_PASSWORD_SUCCESS
	payload: ForgotPasswordSuccessPayload
}

export type ForgotPasswordFailed = {
	type: typeof FORGOT_PASSWORD_FAILED
	payload: ForgotPasswordFailedPayload
}

export interface ForgotPasswordResetPayload {
	userName: string
	password: string
	pin: string
	history: {
		[key: string]: any
	}
}

export interface verifyOtpPayload {
	pin: string
	userName: string
	history?: any
}

export interface verifyOtpSuccessPayload {
	message: string
}

export interface verifyOtpFailedPayload {
	message: string
}

export interface ForgotPasswordResetSuccessPayload {
	message: string
}

export interface ForgotPasswordResetFailedPayload {
	message: string
}

export type ForgotPasswordReset = {
	type: typeof FORGOT_PASSWORD_RESET
	payload: ForgotPasswordResetPayload
}

export type VerifyOtp = {
	type: typeof VERIFY_OTP
	payload: verifyOtpPayload
}

export type VerifyOtpSuccess = {
	type: typeof VERIFY_OTP_SUCCESS
	payload: verifyOtpSuccessPayload
}

export type VerifyOtpFailed = {
	type: typeof VERIFY_OTP_FAILED
	payload: verifyOtpFailedPayload
}

export type ForgotPasswordResetSuccess = {
	type: typeof FORGOT_PASSWORD_RESET_SUCCESS
	payload: ForgotPasswordResetSuccessPayload
}

export type ForgotPasswordResetFailed = {
	type: typeof FORGOT_PASSWORD_RESET_FAILED
	payload: ForgotPasswordResetFailedPayload
}

export interface CreateUserPayload {
	cognito_role: string
	password: string
	signup_email: string
	fullname: string
	gender?: string
	job_title: string
	company_name: string
	about?: string
	website?: string
	card_title?: string
	country?: string
	province?: string
	district?: string
	palika?: string
	city_village_name?: string
	phone_number: Email[]
	email: Email[]
	facebook_url?: string
	twitter_url?: string
	whatsapp_number?: string
	viber_number?: string
	profile_picture?: any
	cover_image?: any
	date_of_birth?: any
	address_line_1: string
	address_line_2?: string
	city: string
	postal_code: string
}

export interface Email {
	value: string
	type: string
}

export interface CreateUserSuccessPayload {
	message: string
	data: any
}

export interface CreateUserFailedPayload {
	message: string
}

export type CreateUser = {
	type: typeof CREATE_USER
	payload: SignupType
}

export type CreateUserSuccess = {
	type: typeof CREATE_USER_SUCCESS
	payload: CreateUserSuccessPayload
}

export type CreateUserFailed = {
	type: typeof CREATE_USER_FAILED
	payload: CreateUserFailedPayload
}

export type AuthAction =
	| SignIn
	| SignInSuccess
	| SignInFailed
	| SignOut
	| ForgotPassword
	| ForgotPasswordSuccess
	| ForgotPasswordFailed
	| ForgotPasswordReset
	| ForgotPasswordResetSuccess
	| ForgotPasswordResetFailed
	| CreateUser
	| CreateUserSuccess
	| CreateUserFailed
	| SignUpConfirm
	| SignUpConfirmSuccess
	| SignUpConfirmFailed
	| VerifyOtp
	| VerifyOtpSuccess
	| VerifyOtpFailed
	| ResendOtp
	| SignInConfirmSignup
	| ClearSuccess
