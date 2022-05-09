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
import { AuthAction } from './types'

export interface InitialState {
	error: string
	loading: boolean
	message?: string
	user?: {
		[key: string]: any
	}
	userObj?: {
		[key: string]: any
	}
	// pictureLoading?: boolean
	// uploadUrl?: any
	forgotPasswordUser?: {
		[key: string]: any
	}
}

const InitialState: InitialState = {
	error: '',
	loading: false,
	message: '',
}

export default function authReducer(
	state = InitialState,
	action: AuthAction
): InitialState {
	switch (action.type) {
		case SIGN_IN: {
			return {
				...state,
				error: '',
				loading: true,
			}
		}

		case CLEAR_SUCCESS: {
			return {
				...state,
				error: '',
				loading: false,
			}
		}

		case SIGN_IN_SUCCESS: {
			return {
				...state,
				error: '',
				message: action.payload.message,
				loading: false,
				user: action.payload.user,
				userObj: action.payload.userObj,
			}
		}
		case SIGN_IN_FAILED: {
			return {
				...state,
				error: action.payload.message,
				loading: false,
				message: '',
			}
		}

		case SIGN_OUT: {
			return { ...state, error: '', message: '' }
		}

		case SIGN_IN_CONFIRM_SIGNUP: {
			return {
				...state,
				loading: false,
				message: '',
			}
		}

		case CONFIRM_SIGN_UP: {
			return { ...state, error: '', loading: true, message: '' }
		}

		case SIGN_UP_CONFIRMED: {
			return {
				...state,
				error: '',
				loading: false,
				message: action.payload.message,
			}
		}
		case SIGN_UP_CONFIRMED_FAILED: {
			return {
				...state,
				error: action.payload.message,
				loading: false,
				message: '',
			}
		}

		case FORGOT_PASSWORD: {
			return {
				...state,
				forgotPasswordUser: { userName: action.payload.userName },
				loading: true,
				error: '',
				message: '',
			}
		}

		case FORGOT_PASSWORD_SUCCESS: {
			return {
				...state,
				loading: false,
				error: '',
				message: '',
			}
		}

		case FORGOT_PASSWORD_FAILED: {
			return {
				...state,
				loading: false,
				error: '',
				message: '',
			}
		}

		case RESEND_OTP: {
			return {
				...state,
				forgotPasswordUser: { userName: action.payload.userName },
				loading: true,
				error: '',
				message: '',
			}
		}

		case VERIFY_OTP: {
			return {
				...state,
				loading: true,
				error: '',
				message: '',
			}
		}

		case VERIFY_OTP_SUCCESS: {
			return {
				...state,
				loading: false,
				error: '',
				message: action.payload.message,
			}
		}

		case VERIFY_OTP_FAILED: {
			return {
				...state,
				loading: false,
				message: '',
				error: action.payload.message,
			}
		}

		case FORGOT_PASSWORD_RESET: {
			return {
				...state,
				loading: true,
				error: '',
				message: '',
			}
		}

		case FORGOT_PASSWORD_RESET_SUCCESS: {
			return {
				...state,
				loading: false,
				message: action.payload.message,

				error: '',
			}
		}

		case FORGOT_PASSWORD_RESET_FAILED: {
			return {
				...state,
				loading: false,
				message: '',
				error: action.payload.message,
			}
		}

		case CREATE_USER: {
			return { ...state, loading: true, error: '' }
		}
		case CREATE_USER_SUCCESS: {
			return {
				...state,
				loading: false,
				// uploadUrl: action.payload.data,
			}
		}
		case CREATE_USER_FAILED: {
			return {
				...state,
				loading: false,
				error: action.payload.message,
			}
		}

		default: {
			return state
		}
	}
}
