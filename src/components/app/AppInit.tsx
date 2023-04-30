import AppLayout from './components'

interface Props {
  children: JSX.Element
}

const AppInit = ({ children }: Props) => {
  return (
    <>
      <AppLayout>{children}</AppLayout>
    </>
  )
}

export default AppInit
