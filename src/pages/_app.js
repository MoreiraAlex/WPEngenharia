import '../styles/globals.css'

import Cookies from '../components/cookies'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Cookies/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
