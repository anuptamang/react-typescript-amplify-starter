import { Col, Form, Input, Row, Select } from 'antd'
import { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Btn from '../../components/Btn'
import { roles } from '../../constants/roles'
import { SignupType } from '../../interface/auth'
import { createUser } from '../../redux/auth/action'

const initialValues: SignupType = {
  fullName: '',
  password: '',
  userName: '',
  role: '',
}

const Signup: FC<any> = ({}) => {
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
          createUser({
            userName: formValues.userName,
            password: formValues.password,
            fullName: formValues.fullName,
            role: formValues.role.toLowerCase(),
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

  return (
    <Row justify='center'>
      <Col span={8}>
        <h1>Signup</h1>
        <Form form={form} layout='vertical'>
          <Form.Item
            label='Username'
            name='userName'
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input name='userName' onChange={handleInputChange} />
          </Form.Item>
          <Form.Item
            label='Password'
            name='password'
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password name='password' onChange={handleInputChange} />
          </Form.Item>
          <Form.Item
            label='Full Name'
            name='fullName'
            rules={[
              { required: true, message: 'Please input your full name!' },
            ]}
          >
            <Input name='fullName' onChange={handleInputChange} />
          </Form.Item>
          <Select
            defaultValue='Select Role'
            style={{ width: '100%', marginBottom: '50px' }}
            onChange={(e) => handleSelectChange(e, 'role')}
          >
            {roles.map((each: any, index: number) => {
              return (
                <Select.Option key={index} value={each.value}>
                  {each.value}
                </Select.Option>
              )
            })}
          </Select>
          <Btn onClick={submitHandler} children='Sign up' />
        </Form>
      </Col>
    </Row>
  )
}

export default Signup
