import { useState } from "react";
import { Lightbox } from "@/components/Lightbox";
import { MasonryGrid } from "@/components/MasonryGrid";

type Slide = { url: string; alt: string };

type MasonryGalleryProps = {
  slides: Slide[];
  className?: string;
};

export function MasonryGallery({ slides, className }: MasonryGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const openLightbox = (index: number) => {
    setStartIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <MasonryGrid className={className}>
        {slides.map((slide, index) => (
          <button
            key={slide.url}
            type="button"
            onClick={() => openLightbox(index)}
            className="block w-full cursor-pointer border-0 bg-transparent p-0 text-left">
            <img src={slide.url} alt={slide.alt} loading="lazy" />
          </button>
        ))}
      </MasonryGrid>
      <Lightbox
        slides={slides}
        startIndex={startIndex}
        open={lightboxOpen}
        onOpenChange={setLightboxOpen}
      />
    </>
  );
}
