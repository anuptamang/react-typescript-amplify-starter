import { API, Auth } from 'aws-amplify'
import {
	ForgotPasswordPayload,
	ForgotPasswordResetPayload,
	SigninPayload,
	SigninSuccessPayload,
	SignUpConfirmPayload,
} from './types'

export const signInApi = ({
	email,
	password,
}: SigninPayload): Promise<SigninSuccessPayload> => {
	return Auth.signIn(email, password)
}

export const confirmSignUpApi = ({
	userName,
	pin,
}: SignUpConfirmPayload): Promise<any> | undefined => {
	return Auth.confirmSignUp(userName, pin, { forceAliasCreation: true })
}

export const getSession = () => {
	return new Promise((resolve, reject) => {
		Auth.currentSession()
			.then((data) => {
				Auth.currentAuthenticatedUser({ bypassCache: true })
					.then(resolve)
					.catch(reject)
			})
			.catch(reject)
	})
}

export const signOutApi = () => {
	return Auth.signOut()
}

export const forgotPasswordApi = ({ userName }: ForgotPasswordPayload) => {
	const url = `/resetpassword`
	return API.post('backendApiUnAuth', url, {
		body: { userName },
	})
}

export const forgotPasswordResetApi = ({
	pin,
	userName,
	password,
	history,
}: ForgotPasswordResetPayload): Promise<string> => {
	const url = `/resetpassword`
	return API.put('backendApiUnAuth', url, {
		body: { pin, userName, password },
	})
	// return Auth.forgotPasswordSubmit(userName, pin, password)
}

export const verifyOtpApi = ({ userName, pin }: any): any => {
	const url = `/verifyOTP`
	return API.put('backendApiUnAuth', url, {
		body: { userName, pin },
	})
}

// export const resendOtpApi = ({ userName }: ResendOtpPayload) => {
// 	return Auth.resendSignUp(userName)
// }

export const resendOtpApi = ({ userName }: any): any => {
	const url = `/resendpin`
	return API.put('backendApiUnAuth', url, {
		body: { userName },
	})
}

export const signUpApi = ({ userName, password, fullName, role }: any): any => {
	const url = `/signup`
	return API.post('backendApiUnAuth', url, {
		body: { userName, password, fullName, role },
	})
}

export const verifyUserApi = ({ userName, pin }: any): any => {
	const url = `/verify`
	return API.put('backendApiUnAuth', url, {
		body: { userName, pin },
	})
}
