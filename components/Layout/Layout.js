import Header from '../Header/header.js'
import NProgress from "nprogress"
import Router from 'next/router';
import 'nprogress/nprogress.css';


NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());


export default function Layout({ children, ...props }) {
  return (
    <>
        <Header />
        <div className="content">
            {children}
        </div>
    </>
  )
}