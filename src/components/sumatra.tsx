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
    "bengkulu"
  ];

  const map = "/maps/sumatra.svg";

  return SvgGenerator(provinces, map);
}