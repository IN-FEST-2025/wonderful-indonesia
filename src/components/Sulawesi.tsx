"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function Sulawesi() {
  const router = useRouter();
  const svgRef = useRef<HTMLObjectElement>(null);

  useEffect(() => {
    const objectEl = svgRef.current;

    const handleLoad = () => {
      const svgDoc = objectEl?.contentDocument;
      if (!svgDoc) return;

      const ids = [
        "s-utara",
        "s-selatan",
        "s-tengah",
        "s-tenggara",
        "gorontalo",
      ];

      ids.forEach((id) => {
        const el = svgDoc.getElementById(id);
        if (el) {
          el.style.transition = "transform 0.3s, fill 0.3s, filter 0.3s";
          el.style.transformOrigin = "center center";

          el.addEventListener("mouseenter", () => {
            el.style.transform = "scale(1.05)";
            el.style.filter = "drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.3))";
            el.style.cursor = "pointer";
            el.style.zIndex = "1000";
            el.parentNode?.appendChild(el);
          });

          el.addEventListener("mouseleave", () => {
            el.style.transform = "scale(1)";
            el.style.filter = "none";
            el.style.zIndex = "1";
          });

          el.addEventListener("click", () => {
            router.push(`/provinsi/${id}`);
          });
        }
      });
    };

    if (objectEl) {
      // Tambahkan listener load
      objectEl.addEventListener("load", handleLoad);

      // Jika file SVG sudah ter-cache dan tidak memicu event "load", paksa jalankan:
      if (
        objectEl.contentDocument &&
        objectEl.contentDocument.readyState === "complete"
      ) {
        handleLoad();
      }
    }

    // Cleanup
    return () => {
      if (objectEl) {
        objectEl.removeEventListener("load", handleLoad);
      }
    };
  }, [router]);

  return (
    <div className="w-full max-w-4xl mx-auto p-4 overflow-visible">
      <object
        ref={svgRef}
        type="image/svg+xml"
        data="/maps/sulawesi.svg"
        className="w-full h-auto"
        style={{ overflow: "visible", zIndex: 1 }}
      >
        Browser tidak mendukung SVG.
      </object>
    </div>
  );
}
