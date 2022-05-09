import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Authenticator } from 'aws-amplify-react'
import { Col, Row } from 'antd'
import AuthLayout from '../../layout/AuthLayout'

const SignIn = React.lazy(() => import('./SignIn'))
const SignUp = React.lazy(() => import('./Signup'))
const ConfirmSignUp = React.lazy(() => import('./ConfirmSignup'))
const ForgotPassword = React.lazy(() => import('./ForgotPassword'))
const VerifyOtp = React.lazy(() => import('./VerifyOtp'))
const ForgotPasswordReset = React.lazy(() => import('./ForgotPasswordReset'))

const DefaultRouteGuard: React.FC = (props: any) => {
  const { authState } = props

  if (authState === 'signedIn') {
    return <Redirect to='/user' />
  }

  return props.children
}

const Index = ({ match, ...props }) => {
  const [isLoginPage, setIsLoginPage] = useState(false)

  return (
    <>
      <Authenticator hideDefault>
        <DefaultRouteGuard {...props}>
          <AuthLayout isLoginPage={isLoginPage}>
            <Row style={{ minHeight: '60vh' }} align={'middle'}>
              <Col xs={24} sm={24} md={24} lg={24}>
                <Suspense fallback={<div className='loading' />}>
                  <Switch>
                    <Redirect
                      exact
                      from={`${match.url}/`}
                      to={`${match.url}/signin`}
                    />
                    <Route
                      path={`${match.url}/signin`}
                      render={(props) => (
                        <SignIn
                          setIsLoginPage={setIsLoginPage}
                          isLoginPage={isLoginPage}
                          {...props}
                        />
                      )}
                    />

                    <Route
                      path={`${match.url}/register`}
                      render={(props) => (
                        <SignUp
                          setIsLoginPage={setIsLoginPage}
                          isLoginPage={isLoginPage}
                          {...props}
                        />
                      )}
                    />

                    <Route
                      path={`${match.url}/confirm-signup`}
                      render={(props) => (
                        <ConfirmSignUp
                          setIsLoginPage={setIsLoginPage}
                          isLoginPage={isLoginPage}
                          {...props}
                        />
                      )}
                    />

                    <Route
                      path={`${match.url}/forgot-password`}
                      render={(props) => (
                        <ForgotPassword
                          setIsLoginPage={setIsLoginPage}
                          isLoginPage={isLoginPage}
                          {...props}
                        />
                      )}
                    />

                    <Route
                      path={`${match.url}/verifyOtp`}
                      render={(props) => (
                        <VerifyOtp
                          setIsLoginPage={setIsLoginPage}
                          isLoginPage={isLoginPage}
                          {...props}
                        />
                      )}
                    />

                    <Route
                      path={`${match.url}/forgot-password-reset`}
                      render={(props) => (
                        <ForgotPasswordReset
                          setIsLoginPage={setIsLoginPage}
                          isLoginPage={isLoginPage}
                          {...props}
                        />
                      )}
                    />

                    <Redirect to='/error' />
                  </Switch>
                </Suspense>
              </Col>
            </Row>
          </AuthLayout>
        </DefaultRouteGuard>
      </Authenticator>
    </>
  )
}

export default Index
