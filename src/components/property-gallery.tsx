"use client";

import Image from "next/image";
import { useState } from "react";

export function PropertyGallery({ images }: { images: { src: string; alt: string }[] }) {
  const [active, setActive] = useState(0);
  return (
    <div className="property-gallery">
      <div className="gallery-main">
        <Image key={images[active].src} src={images[active].src} alt={images[active].alt} fill sizes="(max-width: 900px) 100vw, 72vw" className="cover-image" priority />
        <span className="gallery-count">{String(active + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span>
      </div>
      <div className="gallery-thumbnails" aria-label="Choose gallery image">
        {images.map((image, index) => (
          <button type="button" key={`${image.src}-${index}`} className={active === index ? "gallery-thumb is-active" : "gallery-thumb"} aria-label={`View image ${index + 1}: ${image.alt}`} aria-pressed={active === index} onClick={() => setActive(index)}>
            <Image src={image.src} alt="" fill sizes="(max-width: 600px) 25vw, 12vw" className="cover-image" />
          </button>
        ))}
      </div>
    </div>
  );
}
