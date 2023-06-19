import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title= />
        <p className="description">
         “Dengan mengikuti The 13th IHRS 2023, para peserta mempunyai kesempatan untuk menggali tren, teknologi terkini, serta strategi utama di berbagai ruang sumber daya manusia yang berubah dengan cepat."
        </p>
      </main>

      <Footer />
    </div>
  )
}
