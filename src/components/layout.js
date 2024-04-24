// import Head from 'next/head'
import Footer from './partial/footer'
import Header from './partial/header'

export default function Layout({ children }) {
  return (
    <>
      {/* <Head>
        <meta name="description" content="Ravi Usadad - Portfolio" />
        <meta name="keywords" content="HTML, CSS, JavaScript, Web Designer, Portfolio" />
        <meta name="author" content="Ravi Usadad" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> Ravi Usadad - Portfolio </title>
      </Head> */}``
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}