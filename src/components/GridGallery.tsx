import { useState } from "react";
import { Lightbox } from "@/components/Lightbox";
import { cn } from "@/lib/utils";

type Slide = { url: string; alt: string };

type GridGalleryProps = {
  slides: Slide[];
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
      <div
        className={cn(
          "grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-2 [&>button]:block [&>button]:w-full [&>button]:overflow-hidden [&>button>img]:block [&>button>img]:w-full [&>button>img]:border [&>button>img]:transition-all [&>button>img]:duration-[50ms] [&>button:hover>img]:scale-[1.03] [&>button:hover>img]:contrast-[0.9] [&>button:hover>img]:saturate-[0.7] [&>button:focus-visible>img]:scale-[1.03] [&>button:focus-visible>img]:contrast-[0.9] [&>button:focus-visible>img]:saturate-[0.7]",
          className
        )}>
        {slides.map((slide, index) => (
          <button
            key={slide.url}
            type="button"
            onClick={() => openLightbox(index)}
            className="cursor-pointer border-0 bg-transparent p-0 text-left">
            <img src={slide.url} alt={slide.alt} loading="lazy" />
          </button>
        ))}
      </div>
      <Lightbox
        slides={slides}
        startIndex={startIndex}
        open={lightboxOpen}
        onOpenChange={setLightboxOpen}
      />
    </>
  );
}
