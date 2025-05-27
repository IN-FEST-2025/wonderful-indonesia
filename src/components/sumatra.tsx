"use client";

import SvgGenerator from "@/functions/SvgGenerator";
export default function Jawa() {
  const provinces = [
    "s-sumatra",
    "u-sumatra",
    "b-sumatra",
    "lampung",
    "jambi",
    "aceh",
    "riau",
  ];

  return SvgGenerator(provinces, "/maps/sumatra.svg");
}