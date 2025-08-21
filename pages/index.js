import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>.:: QJA ::.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="QJA JUDO ACADEMY" />
        <p className="description">
          lista de presença
        </p>
      </main>

      <Footer />
    </div>
  )
}
