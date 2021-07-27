import NProgress from "nprogress"
import 'nprogress/nprogress.css';

import Router from "next/router"
import Head from "next/head"

import '../styles/globals.css'
import Header from '../components/Header.js'

NProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', () => NProgress.start()); Router.events.on('routeChangeComplete', () => NProgress.done()); Router.events.on('routeChangeError', () => NProgress.done());  


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" type="text/css" href="/nprogress.css" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
