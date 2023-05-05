import { StoreProvider } from 'context/StoreProvider'
import AppLayout from './components'

interface Props {
  children: JSX.Element
}

const AppInit = ({ children }: Props) => {
  return (
    <>
      <StoreProvider hydrationData={children.props.hydrationData}>
        <AppLayout>{children}</AppLayout>
      </StoreProvider>
    </>
  )
}

export default AppInit
