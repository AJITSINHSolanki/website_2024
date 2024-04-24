// import Head from 'next/head'
import Footer from './partial/footer'
import Header from './partial/header'
import HeadTag from './partial/headtag'

import { GoogleAnalytics } from '@next/third-parties/google'
 
// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//       <GoogleAnalytics gaId="G-XYZ" />
//     </html>
//   )
// }



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

    <html lang="en">
      <head>
        <meta name="google-site-verification" content="xFnknY8NHESE0k-Sn3A4Qgr-DjZE2J4Qnwzc5Z4Z8Qs" />
      </head>
      <body>          
          <Header />
          <main>{children}</main>
          <Footer />
      </body>
      <GoogleAnalytics gaId="G-0B4NF5CK1E" />
    </html>

      
    </>
  )
}