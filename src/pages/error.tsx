import { Col, Row } from 'antd'
import { Link } from 'react-router-dom'
import Btn from '../components/Btn'
import SadIcon from '../components/icons/SadIcon'
import Container from '../components/styled/Container'
import AuthLayout from '../layout/AuthLayout'

const Error = () => {
  return (
    <AuthLayout isLoginPage={true}>
      <Container>
        <Row
          style={{ minHeight: '60vh', textAlign: 'center' }}
          align='middle'
          justify='center'
        >
          <Col span={12}>
            <div className='img-sad' style={{ marginBottom: '50px' }}>
              <SadIcon />
            </div>

            <h1>Page Not Found!</h1>
            <p style={{ marginBottom: '50px' }}>
              The Page you are looking for doesn't exist or an other error
              occured.
            </p>
            <Link to='/'>
              <Btn>Return to Home</Btn>
            </Link>
          </Col>
        </Row>
      </Container>
    </AuthLayout>
  )
}

export default Error
