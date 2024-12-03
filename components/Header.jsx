import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-green-600 text-white">
            <nav className="container mx-auto flex justify-between items-center py-4 px-6">
                <h1 className="text-2xl font-bold">Agende Naturali</h1>
                <ul className="flex space-x-6">
                    <li><Link href="/"><a className="hover:underline">Home</a></Link></li>
                    <li><Link href="/galleria"><a className="hover:underline">Galleria</a></Link></li>
                    <li><Link href="/chi-siamo"><a className="hover:underline">Chi Sono</a></Link></li>
                    <li><Link href="/contatti"><a className="hover:underline">Contatti</a></Link></li>
                </ul>
            </nav>
        </header>
    );
}