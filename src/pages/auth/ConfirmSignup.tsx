import { Col, Form } from 'antd'
import { useEffect, useState } from 'react'
import OtpInput from 'react-otp-input'
import { useDispatch, useSelector } from 'react-redux'
import CustomButton from '../../components/Btn'
import { confirmSignUp, resendOtp } from '../../redux/auth/action'

const ConfirmSignUpForm = ({ history, isLoginPage, setIsLoginPage }: any) => {
  const dispatch = useDispatch()
  const loading = useSelector((state: any) => state.authReducer.loading)
  const userName = history.location.state?.email

  const hasError = useSelector((state: any) => state.authReducer.error)
    ? true
    : false

  const [otp, setOtp] = useState('')

  const onFinish = (values: any) => {
    console.log(userName)
    console.log(otp, 'otp')

    dispatch(
      confirmSignUp({
        userName: userName,
        pin: otp,
        history,
      })
    )
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  console.log(history)

  const initialValues = {
    userName: history.location.state?.userName,
    pin: '',
  }

  const handleResendOtp = () => {
    dispatch(resendOtp({ userName }))
    // console.log(email)
  }

  useEffect(() => {
    if (isLoginPage) setIsLoginPage(true)
  }, [])

  return (
    <>
      <Col span={24} style={{ textAlign: 'center' }}>
        <div className='authHead'>
          <h2>Verify OTP</h2>
          <p>Please enter the OTP that we’ve sent to your email</p>
        </div>
      </Col>
      <Form
        name='basic'
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        initialValues={initialValues}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
        className='login-form'
      >
        <div className='otp-holder'>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            inputStyle='otp-input'
            hasErrored={hasError}
          />
        </div>
        <Col span={24} style={{ textAlign: 'center', marginBottom: 40 }}>
          <p>
            Didn’t Get Code?{' '}
            <span
              style={{ cursor: 'pointer' }}
              onClick={handleResendOtp}
              className='info-link'
            >
              Resend OTP
            </span>
          </p>
        </Col>

        <Form.Item wrapperCol={{ span: 24 }} style={{ textAlign: 'center' }}>
          <CustomButton
            htmlType='submit'
            loading={loading}
            id='btn-confirmSignup'
          >
            Confirm Sign Up
          </CustomButton>
        </Form.Item>
      </Form>
    </>
  )
}

export default ConfirmSignUpForm
