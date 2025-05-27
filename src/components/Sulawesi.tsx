"use client";

import SvgGenerator from "@/functions/SvgGenerator";

export default function Sulawesi() {

  const provinces = [
    "s-utara",
    "s-selatan",
    "s-tengah",
    "s-tenggara",
    "gorontalo",
  ];

  const map = "/maps/sulawesi.svg";

  return (

    SvgGenerator(provinces, map)

  )
  
}
