import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import Btn from '../../../components/Btn'
import Loading from '../../../components/Loading'
import Container from '../../../components/styled/Container'
import { signOut } from '../../../redux/auth/action'
import { RootState } from '../../../redux/reducers'

const Dashboard = (props) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { loading, data: user } = useSelector(
    (state: RootState) => state.userReducer
  )

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <h1>This is Dashboard</h1>
          <p>Welcome {user?.fullName} !</p>
          <Btn onClick={() => dispatch(signOut({ history }))}>Logout</Btn>
        </Container>
      )}
    </>
  )
}

export default Dashboard
