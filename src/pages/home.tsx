'use client';

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [expanded, setExpanded] = useState(false);
  const [selectedIsland, setSelectedIsland] = useState<string | null>(null);

  const handleGetStarted = () => {
    setExpanded(true);
  };

  const handleMapClick = (e: React.MouseEvent) => {
    
    
    // Hanya jalankan jika klik langsung pada peta, bukan pada pulau
    if (e.target === e.currentTarget || (e.target as HTMLElement).tagName === 'IMG') {
      
      
      if (expanded && selectedIsland) {
        // Jika pulau sudah dipilih, kembali ke tampilan peta
        
        setSelectedIsland(null);
      } else if (expanded) {
        // Jika peta sudah diperbesar tapi tidak ada pulau yang dipilih, kembali ke tampilan awal
        
        setExpanded(false);
      }
    } else {
      
    }
  };

  const handleIslandClick = (islandName: string, e: React.MouseEvent) => {
    
    
    if (expanded) {
      e.preventDefault(); // Mencegah default behavior
      e.stopPropagation(); // Mencegah event bubbling ke handleMapClick
      
      
      
      // Set state untuk menampilkan pulau yang dipilih
      setSelectedIsland(islandName);
      
      
    } else {
      
    }
  };

  // Menentukan gambar yang akan ditampilkan berdasarkan state
  const getImageSrc = () => {
    if (selectedIsland) {
      return `/pulau/${selectedIsland}.svg`;
    }
    return "/Indo.svg";
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-4 bg-gray-100 relative overflow-hidden">
      {/* Hero Section - Left Side */}
      <div className={`w-full md:w-1/2 p-8 flex flex-col justify-center space-y-6 transition-all duration-1000 ease-in-out ${expanded ? '-translate-x-full opacity-0' : ''}`}>
        <h1 className="text-4xl md:text-5xl font-bold">Wonderful Indonesia</h1>
        <p className="text-gray-700">
          lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
        </p>
        <div>
          <button 
            className="bg-black text-white px-8 py-3 font-medium hover:bg-gray-800 transition-colors"
            onClick={handleGetStarted}
          >
            GET STARTED
          </button>
        </div>
      </div>
      
      {/* Map Section */}
      <div className={`transition-all duration-1000 ease-in-out ${expanded ? 'fixed inset-0 flex items-center justify-center z-10 bg-gray-100' : ''}`}>
        <div 
          className={`relative transition-all duration-1500 ease-in-out transform ${expanded ? 'scale-150' : ''}`}
          onClick={(e) => handleMapClick(e)}
          style={{ cursor: expanded ? 'pointer' : 'default' }}
        >
          {/* Peta Indonesia atau Pulau yang dipilih */}
          <Image 
            src={getImageSrc()} 
            alt="Indonesia Map" 
            width={expanded ? 800 : 500} 
            height={expanded ? 800 : 500} 
            className={`transition-all duration-1500 ease-in-out ${selectedIsland ? 'scale-125' : ''}`}
            useMap={selectedIsland ? undefined : "#indonesia-map"}
            onClick={(e) => {
              console.log('Image onClick dipanggil');
              console.log(`selectedIsland=${selectedIsland}`);
              // Jika pulau sudah dipilih dan klik pada gambar pulau, kembali ke peta
              if (selectedIsland) {
                console.log('Klik pada gambar pulau, kembali ke peta');
                e.stopPropagation();
                setSelectedIsland(null);
              } else {
                console.log('Klik pada gambar peta, tidak ada tindakan khusus');
              }
            }}
          />
          
          {/* Image map untuk area yang dapat diklik */}
          
          {expanded && !selectedIsland && (
            <map name="indonesia-map">
              {/* Kalimantan */}
              <area 
                shape="poly" 
                coords="345,249,367,254,371,249,367,242,371,236,357,219,354,216,338,231,336,238,343,243,345,249" 
                alt="Kalimantan" 
                onClick={(e) => handleIslandClick('Kalimantan', e)} 
                style={{ cursor: 'pointer' }} 
              />
              {/* Sumatera */}
              <area 
                shape="poly" 
                coords="200,200,220,220,240,240,260,260,280,280,300,300,320,320,340,340,360,360,380,380,400,400,420,420,440,440,460,460,480,480,500,500" 
                alt="Sumatera" 
                onClick={(e) => handleIslandClick('Sumatera', e)} 
                style={{ cursor: 'pointer' }} 
              />
              {/* Jawa */}
              <area 
                shape="rect" 
                coords="300,300,400,320" 
                alt="Jawa" 
                onClick={(e) => handleIslandClick('Jawa', e)} 
                style={{ cursor: 'pointer' }} 
              />
              {/* Sulawesi */}
              <area 
                shape="rect" 
                coords="420,250,450,290" 
                alt="Sulawesi" 
                onClick={(e) => handleIslandClick('Sulawesi', e)} 
                style={{ cursor: 'pointer' }} 
              />
              {/* Bali */}
              <area 
                shape="rect" 
                coords="210,110,220,120" 
                alt="Bali" 
                onClick={(e) => handleIslandClick('Bali', e)} 
                style={{ cursor: 'pointer' }} 
              />
              {/* Papua */}
              <area 
                shape="rect" 
                coords="200,50,250,90" 
                alt="Papua" 
                onClick={(e) => handleIslandClick('Papua', e)} 
                style={{ cursor: 'pointer' }} 
              />
              {/* NTT */}
              <area 
                shape="rect" 
                coords="230,120,250,140" 
                alt="NTT" 
                onClick={(e) => handleIslandClick('NTT', e)} 
                style={{ cursor: 'pointer' }} 
              />
              {/* Maluku */}
              <area 
                shape="rect" 
                coords="180,70,200,90" 
                alt="Maluku" 
                onClick={(e) => handleIslandClick('Maluku', e)} 
                style={{ cursor: 'pointer' }} 
              />
              {/* Lombok */}
              <area 
                shape="rect" 
                coords="225,115,235,125" 
                alt="Lombok" 
                onClick={(e) => handleIslandClick('Lombok', e)} 
                style={{ cursor: 'pointer' }} 
              />
              {/* Sumbawa */}
              <area 
                shape="rect" 
                coords="240,115,255,125" 
                alt="Sumbawa" 
                onClick={(e) => handleIslandClick('Sumbawa', e)} 
                style={{ cursor: 'pointer' }} 
              />
            </map>
          )}
        </div>
      </div>
    </div>
  );
}
