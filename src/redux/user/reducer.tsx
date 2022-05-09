import {
  CLEAR_USER_PROFILE,
  GET_ALL_USERS,
  GET_ALL_USERS_SUCCESS,
  GET_USER_PROFILE,
  GET_USER_PROFILE_FAILED,
  GET_USER_PROFILE_SUCCESS,
} from './constant'
import { UserProfileActions } from './types'

interface UserProfile {
  [key: string]: any
}
interface InitialState {
  error?: string
  loading: boolean
  // addContactLoading: boolean
  // deleteContactLoading: boolean
  // acceptContactLoading: boolean
  message?: string
  data: UserProfile
  users?: any
  // singleUser?: any
  // vcf?: any
}

const InitialState: InitialState = {
  error: '',
  loading: false,
  data: {},
  // addContactLoading: false,
  users: {},
  // singleUser: {},
  // vcf: {},
  // deleteContactLoading: false,
  // acceptContactLoading: false,
}

export default function userProfileReducer(
  state: InitialState = InitialState,
  action: UserProfileActions
): InitialState {
  switch (action.type) {
    case GET_USER_PROFILE: {
      return { ...state, loading: true, error: '' }
    }

    case GET_ALL_USERS: {
      return { ...state, loading: true, error: '' }
    }

    case GET_ALL_USERS_SUCCESS: {
      return { ...state, loading: false, users: action.payload, error: '' }
    }

    case GET_USER_PROFILE_SUCCESS: {
      return { ...state, error: '', data: action.payload, loading: false }
    }
    case GET_USER_PROFILE_FAILED: {
      return {
        ...state,
        loading: false,
        error: action.payload.message,
        data: {},
      }
    }

    case CLEAR_USER_PROFILE: {
      return InitialState
    }

    default: {
      return state
    }
  }
}
