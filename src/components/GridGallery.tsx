import { useState } from "react";
import { Lightbox } from "@/components/Lightbox";
import { cn } from "@/lib/utils";

type Slide = { url: string; alt: string };

type GridGalleryProps = {
  slides: Array<Slide>;
  className?: string;
};

export function GridGallery({ slides, className }: GridGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const openLightbox = (index: number) => {
    setStartIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <div className={cn("grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-2", className)}>
        {slides.map((slide, index) => (
          <button
            key={slide.url}
            type="button"
            onClick={() => openLightbox(index)}
            className="group aspect-video cursor-pointer overflow-hidden border bg-transparent">
            <img
              src={slide.url}
              alt={slide.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-all duration-50 group-hover:scale-[1.03] group-hover:contrast-[0.9] group-hover:saturate-[0.7] group-focus-visible:scale-[1.03] group-focus-visible:contrast-[0.9] group-focus-visible:saturate-[0.7]"
            />
          </button>
        ))}
      </div>
      <Lightbox slides={slides} startIndex={startIndex} open={lightboxOpen} onOpenChange={setLightboxOpen} />
    </>
  );
}
