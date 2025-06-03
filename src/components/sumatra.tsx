"use client";

import SvgGenerator from "@/functions/SvgGenerator";
export default function Sumatra() {
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

  const map = "/peta/sumatra.svg";

  return SvgGenerator(provinces, map);
}