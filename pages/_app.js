import 'nprogress/nprogress.css';
import Header from '../components/Header/Header'
import NProgress from "nprogress"
import Router from 'next/router';
import '../styles/globals.css'

NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function Atsukoro({ Component, pageProps }) {
  return (
    <>
      <Header />
        <Component {...pageProps} />
    </>
  )
}

export default Atsukoro
