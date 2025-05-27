"use client";

import SvgGenerator from "@/functions/SvgGenerator";

export default function Papua(){
  const provinces = ["b-papua", "t-papua", "papua"];

  return (
    SvgGenerator(provinces, "/map/papua.svg")
  )

}