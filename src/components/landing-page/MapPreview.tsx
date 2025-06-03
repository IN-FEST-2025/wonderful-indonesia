'use client';

// import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function MapPreview() {
  const router = useRouter();

  const handleMapClick = () => {
    router.push('/'); // Navigasi ke halaman utama dengan peta interaktif
  };

  return (
    <div className="w-full">
      <div 
        className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden cursor-pointer"
        onClick={handleMapClick}
      >
        {/* Menggunakan div dengan background-image sebagai alternatif jika Image tidak tersedia */}
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/Indo.svg')",
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}
        >
          {/* Fallback jika background image tidak berfungsi */}
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            Klik untuk melihat peta interaktif
          </div>
        </div>
      </div>
    </div>
  );
}