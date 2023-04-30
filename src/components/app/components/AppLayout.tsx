import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const AppLayout = ({ children }: Props) => {
  return (
    <>
      <header>header</header>
      <main>{children}</main>
      <footer>footer</footer>
    </>
  )
}

export default AppLayout
