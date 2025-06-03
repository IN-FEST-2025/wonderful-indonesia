"use client";


import { useState } from "react";
import SvgGenerator from "@/functions/SvgGenerator";

export default function Jawa() {
  const [popupImage, setPopupImage] = useState<string | null>(null);

  const provinces = ["t-jawa", "b-jawa", "tgh-jawa", "jakarta", "yogyakarta"];
  const map = "/peta/jawa.svg";

  const handleMarkerClick = (target: string) => {
    setPopupImage(`/img/${target}.jpg`);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto p-4">
      {SvgGenerator(provinces, map)}

      {/* Titik marker - kamu pasang sesuai letak tiap daerah */}
      <div
        className="absolute w-4 h-4 bg-red-500 border-2 border-white rounded-full cursor-pointer"
        style={{ top: "50%", left: "45%" }}
        onClick={() => handleMarkerClick("yogyakarta")}
      ></div>

      <div
        className="absolute w-4 h-4 bg-red-500 border-2 border-white rounded-full cursor-pointer"
        style={{ top: "40%", left: "52%" }}
        onClick={() => handleMarkerClick("jakarta")}
      ></div>

      <div
        className="absolute w-4 h-4 bg-red-500 border-2 border-white rounded-full cursor-pointer"
        style={{ top: "45%", left: "65%" }}
        onClick={() => handleMarkerClick("surabaya")}
      ></div>

      <div
        className="absolute w-4 h-4 bg-red-500 border-2 border-white rounded-full cursor-pointer"
        style={{ top: "35%", left: "30%" }}
        onClick={() => handleMarkerClick("bandung")}
      ></div>

      <div
        className="absolute w-4 h-4 bg-red-500 border-2 border-white rounded-full cursor-pointer"
        style={{ top: "30%", left: "20%" }}
        onClick={() => handleMarkerClick("semarang")}
      ></div>

      {/* Popup */}
      {popupImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={() => setPopupImage(null)}
        >
          <img
            src={popupImage}
            alt="Popup"
            className="max-w-full max-h-full rounded-lg shadow-xl"
          />
        </div>
      )}
    </div>
  );
}
