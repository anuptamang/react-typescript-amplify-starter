import React, { Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

const Dashboard = React.lazy(() => import('./dashboard'))

const Admin = ({ match }) => {
  // console.log('user')

  return (
    <>
      <div>
        <Suspense fallback={<div className='loading' />}>
          <Switch>
            <Redirect
              exact
              from={`${match.url}/`}
              to={`${match.url}/dashboard`}
            />
            <Route
              path={`${match.url}/dashboard`}
              render={(props) => <Dashboard {...props} />}
            />

            <Redirect to='/error' />
          </Switch>
        </Suspense>
      </div>
    </>
  )
}

export default Admin
