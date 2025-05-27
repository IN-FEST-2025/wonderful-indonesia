"use client";

import SvgGenerator from "@/functions/SvgGenerator";

export default function Jawa() {
  const provinces = [
    "t-jawa",
    "b-jawa",
    "tgh-jawa",
    "jakarta",
    "yogyakarta"
  ];

  const map = "/maps/jawa.svg";

  return SvgGenerator(provinces, map);
}