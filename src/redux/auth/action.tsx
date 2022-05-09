import { SignupType } from '../../interface/auth'
import {
	CLEAR_SUCCESS,
	CONFIRM_SIGN_UP,
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
	SIGN_IN_FAILED,
	SIGN_IN_SUCCESS,
	SIGN_OUT,
	SIGN_UP_CONFIRMED,
	SIGN_UP_CONFIRMED_FAILED,
	VERIFY_OTP,
	VERIFY_OTP_FAILED,
	VERIFY_OTP_SUCCESS,
} from './constant'
import {
	ClearSuccess,
	ClearSuccessPayload,
	CreateUser,
	CreateUserFailed,
	CreateUserFailedPayload,
	CreateUserSuccess,
	CreateUserSuccessPayload,
	ForgotPassword,
	ForgotPasswordFailed,
	ForgotPasswordFailedPayload,
	ForgotPasswordPayload,
	ForgotPasswordReset,
	ForgotPasswordResetFailed,
	ForgotPasswordResetFailedPayload,
	ForgotPasswordResetPayload,
	ForgotPasswordResetSuccess,
	ForgotPasswordResetSuccessPayload,
	ForgotPasswordSuccess,
	ForgotPasswordSuccessPayload,
	ResendOtp,
	ResendOtpPayload,
	SetUser,
	SignIn,
	SignInFailed,
	SigninFailedPayload,
	SigninPayload,
	SignInSuccess,
	SigninSuccessPayload,
	SignOut,
	SignoutPayload,
	SignUpConfirmFailedPayload,
	SignUpConfirmPayload,
	SignUpConfirmSuccessPayload,
	VerifyOtp,
	VerifyOtpFailed,
	verifyOtpFailedPayload,
	verifyOtpPayload,
	VerifyOtpSuccess,
	verifyOtpSuccessPayload,
} from './types'

export const signIn = ({
	email,
	password,
	history,
}: SigninPayload): SignIn => ({
	type: SIGN_IN,
	payload: { email, password, history },
})

export const clearSuccessState = ({
	message,
	error,
	loading,
}: ClearSuccessPayload): ClearSuccess => ({
	type: CLEAR_SUCCESS,
	payload: { message, error, loading },
})

export const signInSuccess = ({
	message,
	userObj,
	user,
}: SigninSuccessPayload): SignInSuccess => ({
	type: SIGN_IN_SUCCESS,
	payload: { message, userObj, user },
})

export const signInFailed = ({
	message,
}: SigninFailedPayload): SignInFailed => ({
	type: SIGN_IN_FAILED,
	payload: { message },
})

export const confirmSignUp = ({
	userName,
	pin,
	history,
}: SignUpConfirmPayload): any => ({
	type: CONFIRM_SIGN_UP,
	payload: { userName, pin, history },
})

export const signUpConfirmed = ({ message }: SignUpConfirmSuccessPayload) => ({
	type: SIGN_UP_CONFIRMED,
	payload: { message },
})

export const signUpConfirmedFailed = ({
	message,
}: SignUpConfirmFailedPayload) => ({
	type: SIGN_UP_CONFIRMED_FAILED,
	payload: { message },
})

export const setUser = (): SetUser => {
	return {
		type: SET_USER,
	}
}

export const clearSuccess = (): any => ({
	type: CLEAR_SUCCESS,
})

export const signOut = ({ history }: SignoutPayload): SignOut => ({
	type: SIGN_OUT,
	payload: { history },
})

export const forgotPassword = ({
	history,
	userName,
}: ForgotPasswordPayload): ForgotPassword => ({
	type: FORGOT_PASSWORD,
	payload: { history, userName },
})

export const resendOtp = ({ userName }: ResendOtpPayload): ResendOtp => ({
	type: RESEND_OTP,
	payload: { userName },
})

export const forgotPasswordSuccess = ({
	message,
}: ForgotPasswordSuccessPayload): ForgotPasswordSuccess => ({
	type: FORGOT_PASSWORD_SUCCESS,
	payload: { message },
})

export const forgotPasswordFailed = ({
	message,
}: ForgotPasswordFailedPayload): ForgotPasswordFailed => ({
	type: FORGOT_PASSWORD_FAILED,
	payload: { message },
})

export const forgotPasswordReset = ({
	userName,
	history,
	pin,
	password,
}: ForgotPasswordResetPayload): ForgotPasswordReset => ({
	type: FORGOT_PASSWORD_RESET,
	payload: { history, userName, pin, password },
})

export const forgotPasswordResetSuccess = ({
	message,
}: ForgotPasswordResetSuccessPayload): ForgotPasswordResetSuccess => ({
	type: FORGOT_PASSWORD_RESET_SUCCESS,
	payload: { message },
})

export const forgotPasswordResetFailed = ({
	message,
}: ForgotPasswordResetFailedPayload): ForgotPasswordResetFailed => ({
	type: FORGOT_PASSWORD_RESET_FAILED,
	payload: { message },
})

export const verifyOtp = ({
	userName,
	pin,
	history,
}: verifyOtpPayload): VerifyOtp => ({
	type: VERIFY_OTP,
	payload: { userName, pin, history },
})

export const verifyOtpSuccess = ({
	message,
}: verifyOtpSuccessPayload): VerifyOtpSuccess => ({
	type: VERIFY_OTP_SUCCESS,
	payload: { message },
})

export const verifyOtpFailed = ({
	message,
}: verifyOtpFailedPayload): VerifyOtpFailed => ({
	type: VERIFY_OTP_FAILED,
	payload: { message },
})

export const createUser = ({
	userName,
	password,
	fullName,
	role,
}: SignupType): CreateUser => ({
	type: 'CREATE_USER',
	payload: {
		userName,
		password,
		fullName,
		role,
	},
})

export const createUserSuccess = ({
	message,
	data,
}: CreateUserSuccessPayload): CreateUserSuccess => ({
	type: CREATE_USER_SUCCESS,
	payload: { message, data },
})

export const createUserFailed = ({
	message,
}: CreateUserFailedPayload): CreateUserFailed => ({
	type: CREATE_USER_FAILED,
	payload: { message },
})
