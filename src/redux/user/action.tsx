import {
  CLEAR_USER_PROFILE,
  GET_ALL_USERS,
  GET_ALL_USERS_FAILED,
  GET_ALL_USERS_SUCCESS,
  GET_USER_PROFILE,
  GET_USER_PROFILE_FAILED,
  GET_USER_PROFILE_SUCCESS,
} from './constant'

import {
  AllUserFailed,
  AllUserFailedPayload,
  AllUserSuccess,
  AllUserSuccessPayload,
} from './types'

export type Payload = {
  email?: string
  data?: any
  message?: string
  id?: string
}

interface GetAllUsersType {
  page: any
  limit: any
  name?: string
  role?: string
  joined?: any
  status?: string
  date?: any
}
export interface Action {
  type:
    | typeof GET_USER_PROFILE
    | typeof GET_USER_PROFILE_SUCCESS
    | typeof GET_USER_PROFILE_FAILED

  payload: Payload
}

export interface OnlyType {
  type:
    | typeof GET_USER_PROFILE
    | typeof CLEAR_USER_PROFILE
    | typeof GET_ALL_USERS
}

export const getUserProfile = (payload: Payload): Action => {
  return {
    type: GET_USER_PROFILE,
    payload,
  }
}

export const getUserProfileSuccess = (payload: Payload): Action => {
  return {
    type: GET_USER_PROFILE_SUCCESS,
    payload,
  }
}

export const getUserProfileFailed = (payload: Payload): Action => {
  return {
    type: GET_USER_PROFILE_FAILED,
    payload,
  }
}

export const getAllUsers = ({
  page,
  limit,
  name,
  role,
  joined,
  status,
  date,
}: GetAllUsersType) => {
  return {
    type: GET_ALL_USERS,
    payload: {
      page,
      limit,
      name,
      role,
      joined,
      status,
      date,
    },
  }
}

export const getAllUsersSuccess = (
  payload: AllUserSuccessPayload
): AllUserSuccess => {
  return {
    type: GET_ALL_USERS_SUCCESS,
    payload,
  }
}

export const getAllUsersFailed = (
  payload: AllUserFailedPayload
): AllUserFailed => {
  return {
    type: GET_ALL_USERS_FAILED,
    payload,
  }
}
