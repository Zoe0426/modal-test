import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ModalProvider } from '../context/modalContext'
import ModalControl from '../components/modalControl'

export default function App({ Component, pageProps }: AppProps) {
  return (
  
  <ModalProvider>
<ModalControl/>
    <Component {...pageProps} />
  </ModalProvider>
  
  )
}
