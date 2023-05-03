import { NextPage } from 'next'
import Head from 'next/head'
import { Tabs } from 'antd'
import LoginForm from 'components/features/LoginForm'
import RegisterForm from 'components/features/RegisterForm'

const AuthPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Auth</title>
      </Head>
      <main style={{ width: 400, margin: '50px auto' }}>
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
      </main>
    </>
  )
}

export default AuthPage
