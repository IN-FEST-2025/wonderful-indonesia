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

  return SvgGenerator(provinces, "/maps/jawa.svg");
}