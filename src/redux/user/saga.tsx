import { notification } from 'antd'
import {
  all,
  call,
  fork,
  put,
  StrictEffect,
  takeEvery,
} from 'redux-saga/effects'
import { getAllUsers, getAllUsersFailed, getAllUsersSuccess } from './action'
import { getUsersApi } from './api'
import { GET_ALL_USERS } from './constant'

function* handleGetAllUser({ payload }: ReturnType<typeof getAllUsers>) {
  const { page, limit, name, role, status, date } = payload
  try {
    const data = yield call(() =>
      getUsersApi({ page, limit, name, role, status, date })
    )
    console.log(data)

    yield put(getAllUsersSuccess(data))
  } catch (error: any) {
    yield put(getAllUsersFailed({ message: error.message }))
    yield call(() => {
      notification.error({
        message: error.name,
        description: error.message,
      })
    })
  }
}

function* watchGetAllUser() {
  yield takeEvery(GET_ALL_USERS, handleGetAllUser)
}

export default function* rootSaga(): Generator<StrictEffect> {
  yield all([fork(watchGetAllUser)])
}
