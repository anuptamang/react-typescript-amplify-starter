import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, RouteComponentProps } from 'react-router-dom'
import { clearSuccess, setUser } from '../redux/auth/action'

const RouteGuard: React.FC<RouteComponentProps> = (props: any) => {
  const dispatch = useDispatch()
  const user = useSelector((state: any) => state.userReducer.data)
  const { loading } = useSelector((state: any) => state.authReducer)

  const { authState } = props

  useEffect(() => {
    dispatch(setUser())
  }, [dispatch])

  if (authState === 'signIn') {
    return <Redirect to='/auth/signin' />
  }

  // useEffect(() => {
  // 	return () => {
  // 		dispatch(clearSuccess())
  // 	}
  // }, [loading])

  // if (authState === 'signedIn') {
  // 	return <Redirect to='/user' />
  // }

  // alert('routeguard')

  // console.log(user)
  // console.log('cognito auth status: ', authState)

  return (
    <>
      {authState === 'signedIn' ||
      (authState === 'verifyContact' && user !== undefined) ? (
        <>
          {/* {user.cognito_role === 'admin' && <Redirect to='/admin' />}
					{user.cognito_role === 'user' && <Redirect to='/user' />} */}
          <Redirect to='/admin' />
        </>
      ) : null}
    </>
  )
}

export default RouteGuard
