import { Authenticator } from 'aws-amplify-react'
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import { setUser } from '../../redux/auth/action'
import ViewAdmin from '../../pages/admin'

const UserRouteGuard: React.FC = (props: any) => {
  const dispatch = useDispatch()
  const user = useSelector((state: any) => state.userReducer.data)
  const { loading } = useSelector((state: any) => state.authReducer)
  // console.log(user, 'from uerRoute')
  const { authState } = props
  const isFirstRun = useRef(true)

  // Auth.currentSession()
  //   .then((data) => console.log(data, 'FL'))
  //   .catch((err) => console.log(err))

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false
      dispatch(setUser())
    }

    if (user !== undefined) {
      props.history.push('/admin')
      // if (user.cognito_role && user.cognito_role !== 'user') {
      // }
    }
  }, [user])

  if (authState === 'signIn') {
    return <Redirect to='/' />
  }

  // useEffect(() => {
  // 	return () => {
  // 		dispatch(clearSuccess())
  // 	}
  // }, [loading])

  return (
    <>
      {authState === 'signedIn' && user !== undefined ? props.children : null}
    </>
  )
}

const UserRoute: React.FC = (props: any) => {
  return (
    <Authenticator hideDefault>
      <UserRouteGuard {...props}>
        <Switch>
          <Route
            path={`${props.match.path}`}
            render={() => <ViewAdmin {...props} />}
          />
        </Switch>
      </UserRouteGuard>
    </Authenticator>
  )
}

export default UserRoute
