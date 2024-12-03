import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
      <div>
        <Head>
          <title>Elena Pellegrini</title>
          <meta name="description" content="Elena Pellegrini Art" />
        </Head>
        <Header />
        <main className="bg-green-50">
          <section className="hero h-screen flex flex-col justify-center items-center bg-cover bg-center text-white" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
            <h1 className="text-4xl font-bold">Elena Pellegrini</h1>
            <p className="mt-4 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed sollicitudin nisi. Integer mattis lorem nibh, a auctor magna luctus ut. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla ac mollis erat. Curabitur tristique tortor viverra suscipit accumsan. Nullam viverra magna purus, in vulputate nulla vulputate et. Duis imperdiet leo ac felis maximus, ac iaculis massa viverra.</p>
            <a href="/galleria" className="mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-lg">
              Scopri di più
            </a>
          </section>
        </main>
        <Footer />
      </div>
  );
}