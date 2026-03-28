import { useState } from "react";
import { Lightbox, type Slide } from "@/components/Lightbox";
import { cn } from "@/lib/utils";

export type { Slide };

type MasonryGalleryProps = {
  slides: Array<Slide>;
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
      <div
        className={cn(
          "columns-[300px] gap-2 [&>button]:mb-2 [&>button]:break-inside-avoid [&>button]:overflow-hidden [&>button:focus-visible>img]:scale-[1.03] [&>button:focus-visible>img]:contrast-[0.9] [&>button:focus-visible>img]:saturate-[0.7] [&>button:hover>img]:scale-[1.03] [&>button:hover>img]:contrast-[0.9] [&>button:hover>img]:saturate-[0.7] [&>button>img]:block [&>button>img]:w-full [&>button>img]:border [&>button>img]:transition-all [&>button>img]:duration-50",
          className
        )}>
        {slides.map((slide, index) => (
          <button
            key={slide.thumbUrl ?? slide.url}
            type="button"
            onClick={() => openLightbox(index)}
            className="block w-full cursor-pointer border-0 bg-transparent p-0 text-left">
            <img src={slide.thumbUrl ?? slide.url} alt={slide.alt} loading="lazy" />
          </button>
        ))}
      </div>
      <Lightbox slides={slides} startIndex={startIndex} open={lightboxOpen} onOpenChange={setLightboxOpen} />
    </>
  );
}
