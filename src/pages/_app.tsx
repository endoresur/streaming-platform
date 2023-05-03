import AppInit from 'components/app'
import type { AppProps } from 'next/app'
import 'styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppInit>
      <Component {...pageProps} />
    </AppInit>
  )
}
