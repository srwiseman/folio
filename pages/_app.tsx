import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className="cont">
        <Component {...pageProps} />
      </main>
    </>
  )
}
