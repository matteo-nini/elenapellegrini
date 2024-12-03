import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Agende a Tema Piante</title>
                <meta name="description" content="Scopri agende e taccuini ispirati alla natura" />
            </Head>
            <Header />
            <main className="bg-green-50">
                <section className="hero h-screen flex flex-col justify-center items-center bg-cover bg-center text-white" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
                    <h1 className="text-4xl font-bold">Benvenuti nel mondo delle agende naturali</h1>
                    <p className="mt-4 text-lg">Scopri le creazioni ispirate alla bellezza della natura</p>
                    <a href="/galleria" className="mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-lg">
                        Scopri di più
                    </a>
                </section>
            </main>
            <Footer />
        </div>
    );
}