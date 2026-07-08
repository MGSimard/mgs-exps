import { useState } from "react";
import { Lightbox, isVideoSlide, type Slide } from "@/components/Lightbox";
import { cn } from "@/lib/utils";

export type { Slide };

type GridGalleryProps = {
  slides: Array<Slide>;
  className?: string;
};

export function GridGallery({ slides, className }: GridGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setStartIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <div className={cn("grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-2", className)}>
        {slides.map((slide, index) => {
          const isVideo = isVideoSlide(slide);
          const showPreview = isVideo && previewIndex === index;

          return (
            <button
              key={slide.thumbUrl ?? slide.url}
              type="button"
              onClick={() => openLightbox(index)}
              onPointerEnter={isVideo ? () => setPreviewIndex(index) : undefined}
              onPointerLeave={isVideo ? () => setPreviewIndex(null) : undefined}
              onFocus={isVideo ? () => setPreviewIndex(index) : undefined}
              onBlur={isVideo ? () => setPreviewIndex(null) : undefined}
              className="group relative aspect-video cursor-pointer overflow-hidden border bg-transparent">
              <img
                src={slide.thumbUrl ?? slide.url}
                alt={slide.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-all duration-50 group-hover:scale-[1.03] group-hover:contrast-[0.9] group-hover:saturate-[0.7] group-focus-visible:scale-[1.03] group-focus-visible:contrast-[0.9] group-focus-visible:saturate-[0.7]"
              />
              {/* Mounted only while hovered, so videos cost nothing until previewed. Thumb stays underneath while it loads. */}
              {showPreview && (
                <video
                  src={slide.url}
                  poster={slide.posterUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="pointer-events-none absolute inset-0 h-full w-full object-cover"
                />
              )}
            </button>
          );
        })}
      </div>
      <Lightbox slides={slides} startIndex={startIndex} open={lightboxOpen} onOpenChange={setLightboxOpen} />
    </>
  );
}
