import { Layout } from 'antd'
import AuthFooter from './AuthFooter'
import AuthHeader from './AuthHeader'

const { Header, Content } = Layout

interface Props {
  isLoginPage: boolean
}

const AuthLayout: React.FC<Props> = ({ children, isLoginPage }) => {
  return (
    <Layout className='wrapper'>
      <AuthHeader />
      <div className={'container'}>
        <Content>{children}</Content>
      </div>
      {!isLoginPage && <AuthFooter />}
    </Layout>
  )
}

export default AuthLayout
