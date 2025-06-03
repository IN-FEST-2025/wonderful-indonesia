'use client';

import { useRouter } from 'next/navigation';

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
            lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem 
            ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
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
          <div className="w-full h-64 bg-white bg-opacity-50 rounded-lg flex items-center justify-center">
            <p className="text-gray-700">Klik tombol GET STARTED untuk melihat peta interaktif</p>
          </div>
        </div>
      </div>
    </div>
  );
}