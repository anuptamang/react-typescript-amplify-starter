import { Col, Form, Row } from 'antd'
import { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Btn from '../../components/Btn'
import Container from '../../components/styled/Container'
import { SigninType } from '../../interface/auth'
import { signIn as login } from '../../redux/auth/action'
import { VALIDATIONS } from '../../utility/formValidations'
import FormInput from '../components/FormInput'
import HeadingTitle from '../components/HeadingTitle'

const initialValues: SigninType = {
  email: '',
  password: '',
}

const SignIn: FC<any> = ({ history, setIsLoginPage, isLoginPage }) => {
  const [formValues, setFormValues] = useState(initialValues)
  const [form] = Form.useForm()
  const dispatch = useDispatch()

  const loading = useSelector((state: any) => state.authReducer.loading)

  const handleSelectChange = (e: any, name: string) => {
    setFormValues({ ...formValues, [name]: e })
  }
  const handleInputChange = (e: any) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const submitHandler = () => {
    form
      .validateFields()
      .then((values) => {
        console.log(formValues)
        dispatch(
          login({
            email: formValues.email,
            password: formValues.password,
            history: history,
          })
        )
      })
      .catch((errorInfo) => {
        // console.log(errorInfo)
      })
  }

  useEffect(() => {
    form.setFieldsValue(formValues)
  }, [])

  useEffect(() => {
    if (!isLoginPage) setIsLoginPage(true)
  }, [])

  return (
    <Container>
      <Row justify='center'>
        <Col span={12}>
          <HeadingTitle
            title={'Login to your account'}
            subTitle={'Welcome back'}
          />
          <Form
            form={form}
            initialValues={{ remember: true }}
            layout='vertical'
            onFinish={submitHandler}
            className='auth-form'
          >
            <FormInput
              placeholder='Email Address'
              name='email'
              rules={VALIDATIONS.email}
              onChange={handleInputChange}
            />
            <FormInput
              type='password'
              placeholder='Password'
              name='password'
              rules={VALIDATIONS.password}
              onChange={handleInputChange}
            />
            <div className='info-holder'>
              <Link to='/auth/forgot-password'>Forgot Password? </Link>
            </div>

            <Btn htmlType='submit' loading={loading} size='lg'>
              Login Now
            </Btn>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default SignIn
