import Header from 'components/features/Header'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const AppLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer>footer</footer>
    </>
  )
}

export default AppLayout
