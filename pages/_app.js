import Router, { useRouter } from 'next/router'
import RootLayout from '../components/RootLayout'
import { useLoading } from '../hooks/useLoading'
import '../styles/global.css'
import Loader from '../components/Loader'

const App = ({ Component, pageProps }) => {
  const isLoading = useLoading()

  return (
    <RootLayout>
      {
        isLoading ? <Loader />
          :
          <Component {...pageProps} />
      }
    </RootLayout>
  )
}

export default App
