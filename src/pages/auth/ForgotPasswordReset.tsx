import { Form, Col, Row, Tooltip } from 'antd'
import { forgotPasswordReset as forgotPasswordResetAction } from '../../redux/auth/action'
import { useDispatch, useSelector } from 'react-redux'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/Btn'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'
import Container from '../../components/styled/Container'
import HeadingTitle from '../components/HeadingTitle'
import FormInput from '../components/FormInput'
import Btn from '../../components/Btn'
import { VALIDATIONS } from '../../utility/formValidations'
import InfoIcon from '../../components/icons/InfoIcon'

const PasswordInfo = () => {
  return (
    <>
      <div className='tooltip-holder'>
        <span className='title'>
          Password doesn’t meet the following character
        </span>
        <ol>
          <li>Your password must be atleast 8 character </li>
          <li>Password must have atleast 1 letter(s)</li>
          <li>Password must have at least 1 digit</li>
        </ol>
      </div>
    </>
  )
}

const ForgotPasswordReset = ({ history, setIsLoginPage, isLoginPage }) => {
  console.log(history)
  const [form] = Form.useForm()

  const dispatch = useDispatch()
  const loading = useSelector((state: any) => state.authReducer.loading)

  const { userName, pin } = history.location.state

  const initialValues = {
    userName: userName,
    pin: pin,
    newPassword: '',
  }
  const [formValues, setFormValues] = useState(initialValues)

  const handleInputChange = (e: any) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const submitHandler = () => {
    dispatch(
      forgotPasswordResetAction({
        userName: formValues.userName,
        history,
        pin: formValues.pin,
        password: formValues.newPassword,
      })
    )
  }

  useEffect(() => {
    if (isLoginPage) setIsLoginPage(true)
    if (!history.location.state) history.push('/auth')
  }, [])
  return (
    <>
      <Container>
        <Row justify='center'>
          <Col span={12}>
            <HeadingTitle title={'Create a New Password'} />
            <Form
              form={form}
              initialValues={{ remember: true }}
              layout='vertical'
              onFinish={submitHandler}
              className='auth-form'
            >
              <FormInput name='userName' hidden={true} disabled={true} />
              <FormInput name='pin' hidden={true} disabled={true} />

              <FormInput
                type='password'
                placeholder='New Password'
                name='newPassword'
                rules={VALIDATIONS.password}
                onChange={handleInputChange}
              />
              <FormInput
                type='password'
                placeholder='Re-Enter Password'
                name='rePassword'
                dependencies={['newPassword']}
                rules={VALIDATIONS.rePassword}
                onChange={handleInputChange}
              />
              <Btn htmlType='submit' loading={loading} size='lg'>
                Confirm Password
              </Btn>
              <div className='tooltip-with-info'>
                Password Requirement
                <Tooltip placement='rightBottom' title={<PasswordInfo />}>
                  <InfoIcon />
                </Tooltip>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ForgotPasswordReset
