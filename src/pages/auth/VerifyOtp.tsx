import { Col, Form, Row } from 'antd'
import { useEffect, useState } from 'react'
import OtpInput from 'react-otp-input'
import { useDispatch, useSelector } from 'react-redux'
import Btn from '../../components/Btn'
import InfoIcon from '../../components/icons/InfoIcon'
import Container from '../../components/styled/Container'
import { resendOtp, verifyOtp } from '../../redux/auth/action'
import FormInput from '../components/FormInput'
import HeadingTitle from '../components/HeadingTitle'

const VerifyOtp = ({ history, setIsLoginPage, isLoginPage }) => {
  const dispatch = useDispatch()
  const [form] = Form.useForm()

  const [otp, setOtp] = useState('')
  const [otpError, setOtpError] = useState(false)

  const userName = history.location.state?.userName
  const loading = useSelector((state: any) => state.authReducer.loading)

  const initialValues = {
    userName: userName,
    pin: '',
    newPassword: '',
  }
  const [formValues, setFormValues] = useState(initialValues)

  const onChangeOtp = (otp) => {
    setOtp(otp)

    if (otp.length == 6) {
      setOtpError(false)
    }
  }

  const submitHandler = () => {
    if (otp.length < 6) {
      setOtpError(true)
    } else {
      setOtpError(false)
      dispatch(
        verifyOtp({
          userName: formValues.userName,
          pin: otp,
          history,
        })
      )
    }
  }

  const handleResendOtp = () => {
    dispatch(resendOtp({ userName }))
  }

  useEffect(() => {
    if (isLoginPage) setIsLoginPage(true)
  }, [])

  return (
    <>
      <Container>
        <Row justify='center'>
          <Col span={12}>
            <HeadingTitle
              title={'Enter the OTP sent to email'}
              subTitle={'OTP Verification'}
            />
            <Form
              form={form}
              initialValues={{ remember: true }}
              layout='vertical'
              onFinish={submitHandler}
              className='auth-form'
            >
              <FormInput name='userName' hidden={true} disabled={true} />

              <div className='otp-holder'>
                <OtpInput
                  value={otp}
                  onChange={(otp) => onChangeOtp(otp)}
                  numInputs={6}
                  inputStyle='otp-input'
                  isInputNum
                  shouldAutoFocus
                />
                {otpError && (
                  <div className='ant-form-item-explain ant-form-item-explain-connected'>
                    <div role='alert' className='ant-form-item-explain-error'>
                      OTP is required!
                    </div>
                  </div>
                )}
              </div>
              <div className='info-holder'>
                Didn’t get the code? &nbsp;
                <span onClick={handleResendOtp} className='link'>
                  Resend OTP
                </span>
              </div>

              <Btn htmlType='submit' loading={loading} size='lg'>
                Verify and Proceed
              </Btn>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default VerifyOtp
