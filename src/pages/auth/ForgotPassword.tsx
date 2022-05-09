import { Col, Form, Row } from 'antd'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Btn from '../../components/Btn'
import Container from '../../components/styled/Container'
import { ForgotPasswordType } from '../../interface/auth'
import { forgotPassword as forgotPasswordAction } from '../../redux/auth/action'
import { VALIDATIONS } from '../../utility/formValidations'
import FormInput from '../components/FormInput'
import HeadingTitle from '../components/HeadingTitle'

const initialValues: ForgotPasswordType = {
  userName: '',
}

const ForgotPassword = ({ history, setIsLoginPage, isLoginPage }) => {
  const dispatch = useDispatch()
  const [form] = Form.useForm()
  const [formValues, setFormValues] = useState(initialValues)
  const loading = useSelector((state: any) => state.authReducer.loading)

  const submitHandler = () => {
    dispatch(forgotPasswordAction({ history, userName: formValues.userName }))
  }

  const handleInputChange = (e: any) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    if (isLoginPage) setIsLoginPage(false)
  }, [])

  return (
    <>
      <Container>
        <Row justify='center'>
          <Col span={12}>
            <HeadingTitle title={'Forgot Password'} />
            <Form
              form={form}
              initialValues={{ remember: true }}
              layout='vertical'
              onFinish={submitHandler}
              className='auth-form'
            >
              <FormInput
                placeholder='Email Address'
                name='userName'
                rules={VALIDATIONS.email}
                onChange={handleInputChange}
              />

              <Btn htmlType='submit' loading={loading} size='lg'>
                Reset Password
              </Btn>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ForgotPassword
