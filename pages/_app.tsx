import DefaultLayout from '@layouts/DefaultLayout'
import '../styles/index.scss'

function MyApp({ Component, pageProps }) {
  return <DefaultLayout>
    <Component {...pageProps} />
  </DefaultLayout>
}

export default MyApp
