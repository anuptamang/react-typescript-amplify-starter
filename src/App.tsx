import { Authenticator } from 'aws-amplify-react'
import React, { Suspense } from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'
import { awsConfiguration } from './amplifyConfigure/amplify-configure'
import AdminRoute from './routes/protectedRoute/AdminRoute'
import RouteGuard from './routes/RouteGuard'

const ViewAuth = React.lazy(() => import('./pages/auth'))

const Error = React.lazy(() => import('./pages/error'))

awsConfiguration()

const App: React.FC = () => {
  return (
    <Suspense fallback={<div className='loading' />}>
      <Router>
        <Switch>
          <Route path='/auth/' render={(props) => <ViewAuth {...props} />} />
          <Route path='/admin' component={AdminRoute} />
          <Route path='/error' render={() => <Error />} />
          <Route
            path='/'
            exact
            render={(props) => (
              <Authenticator hideDefault {...props}>
                <RouteGuard {...props} />
              </Authenticator>
            )}
          />
          <Redirect to='error' />
        </Switch>
      </Router>
    </Suspense>
  )
}

export default App
