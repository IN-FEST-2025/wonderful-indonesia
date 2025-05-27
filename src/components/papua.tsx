"use client";

import SvgGenerator from "@/functions/SvgGenerator";

export default function Papua(){
  const provinces = ["b-papua", "t-papua", "papua"];

  const map = "/maps/papua.svg";
  return (
    SvgGenerator(provinces, map)
  )

}