import { Tabs } from 'antd'
import LoginForm from 'components/features/LoginForm'
import RegisterForm from 'components/features/RegisterForm'
import AuthForms from 'components/ui/AuthForms'
import { NextPage } from 'next'
import Head from 'next/head'

const AuthPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Auth</title>
      </Head>
      <AuthForms>
        <Tabs
          items={[
            {
              label: 'Войти',
              key: '1',
              children: <LoginForm />
            },
            {
              label: 'Регистрация',
              key: '2',
              children: <RegisterForm />
            }
          ]}
        />
      </AuthForms>
    </>
  )
}

export default AuthPage
