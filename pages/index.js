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
        <Header title="Kejar Target Produksi 1 Juta Barel, SDM Hulu Migas Harus Punya Sense of Crisis!" />
        <p className="description">
         “Dengan mengikuti The 13th IHRS 2023, para peserta mempunyai kesempatan untuk menggali tren, teknologi terkini, serta strategi utama di berbagai ruang sumber daya manusia yang berubah dengan cepat. IHRS tahun ini diharapkan dapat mendorong para pesertanya untuk berpikir lebih luas, mengubah paradigma yang telah ada, dan memotivasi mereka untuk mengenali potensi, memperluas batasanbatasan yang ada, serta mengambil langkah nyata untuk mencapai tujuan organisasi dan individu,” jelas Chairwoman The 13th Indonesia HR Summit Mira Tripuspita. Mira menuturkan, tahun ini, IHRS diikuti oleh tidak kurang dari 1.000 orang praktisi SDM yang berasal dari beragam industri antara lain minyak dan gas, perbankan, asuransi, kesehatan, perusahaan rintisan, pertambangan, akademisi, manufaktur, dan lainnya. Dalam kesempatan yang sama, Sekretaris SKK Migas Shinta Damayanti mengatakan, gelaran IHRS memiliki peran penting dalam mendorong peningkatan kualitas SDM di Tanah Air. Melalui kegiatan ini, para peserta dapat memperluas pengetahuan mereka tentang perkembangan terkini dalam bidang SDM. “Melalui presentasi, diskusi, dan pameran, para peserta dapat mempelajari praktik terbaik, tren, dan inovasi dalam manajemen SDM. Ini dapat membantu mereka dalam menghadapi tantangan baru dengan wawasan yang selalu dikembangkan. Selain itu, IHRS juga menjadi platform bagi para profesional SDM untuk bertemu, berinteraksi, dan berbagi pengalaman. Pada akhirnya, hal tersebut diharapkan dapat membantu para peserta untuk mengadopsi praktik dan strategi terbaik dalam pengelolaan SDM,” kata Shinta.
        </p>
      </main>

      <Footer />
    </div>
  )
}
