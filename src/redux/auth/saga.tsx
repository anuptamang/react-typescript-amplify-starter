import { notification } from 'antd'
import { all, call, delay, fork, put, takeEvery } from 'redux-saga/effects'
import { getUserProfileFailed, getUserProfileSuccess } from '../user/action'
import { getUserProfileApi } from '../user/api'
import { CLEAR_USER_PROFILE } from '../user/constant'
import {
  confirmSignUp,
  createUser,
  createUserFailed,
  createUserSuccess,
  forgotPassword,
  forgotPasswordFailed,
  forgotPasswordReset,
  forgotPasswordResetFailed,
  forgotPasswordResetSuccess,
  forgotPasswordSuccess,
  resendOtp,
  signIn,
  signInFailed,
  signInSuccess,
  signOut,
  signUpConfirmed,
  signUpConfirmedFailed,
  verifyOtp,
  verifyOtpFailed,
  verifyOtpSuccess,
} from './action'
import {
  forgotPasswordApi,
  forgotPasswordResetApi,
  getSession,
  resendOtpApi,
  signInApi,
  signOutApi,
  signUpApi,
  verifyOtpApi,
  verifyUserApi,
} from './api'
import {
  CONFIRM_SIGN_UP,
  CREATE_USER,
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_RESET,
  RESEND_OTP,
  SET_USER,
  SIGN_IN,
  SIGN_IN_CONFIRM_SIGNUP,
  SIGN_OUT,
  VERIFY_OTP,
} from './constant'

function* handleSignIn({ payload }: ReturnType<typeof signIn>) {
  const { email, password, history } = payload

  try {
    const user = yield call(() => signInApi({ email, password }))

    if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
      alert('New Password Required')
    } else {
      yield history.push('/admin/dashboard')
    }
  } catch (error: any) {
    // console.log(error)

    if (error.code === 'UserNotConfirmedException') {
      // console.log(error.code, '--- UserNotConfirmedException')

      history.push({
        pathname: '/auth/confirm-signup',
        state: { email: email },
      })
      yield put({ type: SIGN_IN_CONFIRM_SIGNUP })
    } else {
      yield put(signInFailed({ message: error.message }))
      yield call(() => {
        notification.error({
          message: error.name,
          description: error.message,
        })
      })
    }
  }
}

function* handleConfirmSignUp({ payload }: ReturnType<typeof confirmSignUp>) {
  const { userName, pin, history } = payload
  try {
    const data = yield call(() => verifyUserApi({ userName, pin }))

    yield put(signUpConfirmed({ message: 'User Confirmed' }))
    yield call(() =>
      notification.success({
        message: 'Otp Verified, Please login to continue',
      })
    )
    yield delay(500)

    yield history.push('/auth')
  } catch (error: any) {
    yield put(signUpConfirmedFailed({ message: error.message }))
    yield call(() => {
      notification.error({
        message: error.name,
        description: error.message,
      })
    })
  }
}

function* watchConfirmSignUp() {
  yield takeEvery(CONFIRM_SIGN_UP, handleConfirmSignUp)
}

function* handleSetUser() {
  let response
  try {
    //call currentAuthenticated User for checking user login
    response = yield call(() => getSession())
  } catch (error: any) {
    console.log('error while setUser', error)
    yield put(signInFailed({ message: error.message }))
    return
  }

  try {
    const user = response.attributes || {}
    const idToken = response.signInUserSession.idToken.jwtToken
    yield put(
      signInSuccess({
        userObj: response,
        user: { ...user, idToken },
        message: 'Sign In Success',
      })
    )

    const userProfileData = yield call(() => getUserProfileApi())
    yield put(getUserProfileSuccess(userProfileData.data))
    // yield put(clearSuccess())
  } catch (error: any) {
    console.log('error while userProfile api faile ', error)
    //call amplify signOut if error occurs while getting userProfile Api
    yield call(() => signOutApi())
    yield put(getUserProfileFailed(error))
  }
}

function* watchSignInUser() {
  yield takeEvery(SIGN_IN, handleSignIn)
  yield takeEvery(SET_USER, handleSetUser)
}

function* handleSignOut({ payload }: ReturnType<typeof signOut>) {
  const { history } = payload

  try {
    yield call(() => signOutApi())
    yield put({ type: CLEAR_USER_PROFILE })
    yield history.push('/')
  } catch (error) {}
}

function* watchSignOut() {
  yield takeEvery(SIGN_OUT, handleSignOut)
}

function* handleforgotPassword({ payload }: ReturnType<typeof forgotPassword>) {
  const { userName, history } = payload

  try {
    const res = yield call(() => forgotPasswordApi({ userName, history }))
    yield put(forgotPasswordSuccess({ message: res.message }))
    yield call(() => {
      notification.success({
        message: res.message,
      })
    })

    yield delay(500)

    yield history.push({
      pathname: '/auth/verifyOtp',
      state: { userName: userName },
    })
  } catch (error: any) {
    yield put(forgotPasswordFailed({ message: error.message }))
    yield call(() => {
      notification.error({
        message: error.name,
        description: error.message,
      })
    })
  }
}

function* watchForgotPassword() {
  yield takeEvery(FORGOT_PASSWORD, handleforgotPassword)
}

function* handleResendOtp({ payload }: ReturnType<typeof resendOtp>) {
  const { userName } = payload

  try {
    const res = yield call(() => resendOtpApi({ userName }))
    yield put(forgotPasswordSuccess({ message: res.message }))
    yield call(() => {
      notification.success({
        message: `${res.message} to ${userName}`,
      })
    })
  } catch (error: any) {
    yield put(forgotPasswordFailed({ message: error.message }))
    yield call(() => {
      notification.error({
        message: error.name,
        description: error.message,
      })
    })
  }
}

function* watchResendOtp() {
  yield takeEvery(RESEND_OTP, handleResendOtp)
}

function* handleForgotPasswordReset({
  payload,
}: ReturnType<typeof forgotPasswordReset>) {
  const { userName, pin, password, history } = payload
  try {
    const res = yield call(() =>
      forgotPasswordResetApi({ userName, pin, password, history })
    )
    yield put(
      forgotPasswordResetSuccess({
        message: res.message,
      })
    )
    yield call(() => notification.success({ message: res.message }))
    yield delay(500)
    yield history.push('/auth/signin')
  } catch (error: any) {
    console.log(error)

    yield put(forgotPasswordResetFailed({ message: error.message }))
    yield call(() => {
      notification.error({
        message: error.name,
        description: error.message,
      })
    })
  }
}

function* watchForgotPasswordReset() {
  yield takeEvery(FORGOT_PASSWORD_RESET, handleForgotPasswordReset)
}

function* handleVerifyOtp({ payload }: ReturnType<typeof verifyOtp>) {
  const { userName, pin, history } = payload

  // console.log(payload)

  try {
    const res = yield call(() => verifyOtpApi({ userName, pin }))

    yield put(
      verifyOtpSuccess({
        message: `${res.message}, please create a new password!`,
      })
    )
    yield call(() =>
      notification.success({
        message: `${res.message}, please create a new password!`,
      })
    )
    yield delay(500)
    yield history.push({
      pathname: '/auth/forgot-password-reset',
      state: { userName: userName, pin: pin },
    })
    // history.push('/auth/forgot-password-reset')
  } catch (error: any) {
    const errMsg = error?.response?.data.message

    yield put(verifyOtpFailed({ message: errMsg }))

    yield call(() =>
      notification.error({
        message: errMsg,
      })
    )
  }
}

function* watchVerifyOtp() {
  yield takeEvery(VERIFY_OTP, handleVerifyOtp)
}

function* handleCreateUser({ payload }: ReturnType<typeof createUser>) {
  const { userName, password, fullName, role } = payload

  try {
    const profileData = yield call(() =>
      signUpApi({
        userName,
        password,
        fullName,
        role,
      })
    )
    yield put(createUserSuccess(profileData))
    yield call(() =>
      notification.success({
        message: 'Signup Success, Please login to continue',
      })
    )
    yield delay(500)
    yield window.location.replace('/auth/signin')
  } catch (error: any) {
    yield put(createUserFailed({ message: error.message }))
    yield call(() => {
      notification.error({
        message: error.name,
        description: error.response.data.message,
      })
    })
  }
}

function* watchCreateUser() {
  yield takeEvery(CREATE_USER, handleCreateUser)
}

export default function* authSaga(): Generator<any> {
  yield all([
    fork(watchSignInUser),
    fork(watchSignOut),
    fork(watchForgotPassword),
    fork(watchForgotPasswordReset),
    fork(watchConfirmSignUp),
    fork(watchCreateUser),
    fork(watchVerifyOtp),
    fork(watchResendOtp),
  ])
}
