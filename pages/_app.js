import '../styles/globals.css'
import Layout from '../components/Layout/Layout'

function Atsukoro({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default Atsukoro
