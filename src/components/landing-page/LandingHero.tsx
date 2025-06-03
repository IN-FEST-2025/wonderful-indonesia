'use client';

import { useRouter } from 'next/navigation';
import MapPreview from './MapPreview';

export default function LandingHero() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/'); // Navigasi ke halaman utama dengan peta interaktif
  };

  return (
    <div className="min-h-screen flex items-center justify-start">
      <div className="w-full max-w-6xl p-8 bg-white bg-opacity-90 rounded-lg shadow-lg flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">Wonderful Indonesia</h1>
          <p className="text-gray-700 mb-8">
            Jelajahi keindahan Indonesia melalui peta interaktif kami. Temukan destinasi wisata menarik dan keajaiban budaya dari Sabang sampai Merauke.
          </p>
          <button 
            onClick={handleGetStarted}
            className="bg-black text-white px-6 py-3 font-semibold hover:bg-gray-800 transition-colors"
          >
            GET STARTED
          </button>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Peta Indonesia</h2>
          <MapPreview />
        </div>
      </div>
    </div>
  );
}