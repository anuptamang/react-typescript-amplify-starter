import { combineReducers } from 'redux'
import authReducer from './auth/reducer'
import userReducer from './user/reducer'

export const reducers = combineReducers({
  authReducer,
  userReducer,
})

export type RootState = ReturnType<typeof reducers>
