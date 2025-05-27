"use client";

import SvgGenerator from "@/functions/SvgGenerator";

export default function Kalimantan(){

    const provinces = [
        "k-selatan",
        "k-utara",
        "k-tengah",
        "k-barat",
        "k-timur",
    ]

    const map = "/maps/kalimantan.svg";

    return (

        SvgGenerator(provinces, map)

    )

}