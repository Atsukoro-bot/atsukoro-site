import Head from 'next/head'
import Header from '../Header'

export default function Layout({ children, pageTitle, description, ...props }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>{pageTitle}</title>
      </Head>
      <section>
        <Header />
        <div className="content">{children}</div>
      </section>
    </>
  )
}