import { useEffect, useRef, useState } from "react";
import { Dialog as BaseDialog } from "@base-ui/react/dialog";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import { cn } from "@/lib/utils";

interface LightboxProps {
  slides: Array<{ url: string; alt: string }>;
  startIndex: number;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function Lightbox({ slides, startIndex, open, onOpenChange }: LightboxProps) {
  const [selectedIndex, setSelectedIndex] = useState(startIndex);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const prevSelectedIndexRef = useRef(startIndex);

  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(
    { align: "center", containScroll: false, startIndex, watchDrag: false },
    [Fade()]
  );

  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = (index: number) => {
    if (!emblaMainApi) return;
    emblaMainApi.scrollTo(index);
  };

  const onPrevClick = () => {
    if (!emblaMainApi) return;
    emblaMainApi.scrollPrev();
  };

  const onNextClick = () => {
    if (!emblaMainApi) return;
    emblaMainApi.scrollNext();
  };

  useEffect(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;

    const syncFromEmbla = (api: NonNullable<typeof emblaMainApi>, thumbsApi: NonNullable<typeof emblaThumbsApi>) => {
      const newIndex = api.selectedScrollSnap();
      prevSelectedIndexRef.current = newIndex;
      setSelectedIndex(newIndex);
      thumbsApi.scrollTo(newIndex);
      setPrevBtnDisabled(!api.canScrollPrev());
      setNextBtnDisabled(!api.canScrollNext());
    };

    const onSelect = () => {
      syncFromEmbla(emblaMainApi, emblaThumbsApi);
    };
    emblaMainApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaMainApi.off("select", onSelect);
    };
  }, [emblaMainApi, emblaThumbsApi]);

  useEffect(() => {
    if (open && emblaMainApi) {
      const clampedIndex = Math.max(0, Math.min(startIndex, slides.length - 1));
      emblaMainApi.scrollTo(clampedIndex, true);
      prevSelectedIndexRef.current = clampedIndex;
    }
  }, [open, startIndex, emblaMainApi, slides.length]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      onPrevClick();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      onNextClick();
    }
  };

  return (
    <BaseDialog.Root open={open} onOpenChange={onOpenChange}>
      <BaseDialog.Portal>
        <BaseDialog.Popup
          className="lightbox fixed inset-0 flex flex-col outline-0 transition-all duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0 isolate before:content-[''] before:fixed before:inset-0 before:-z-10 before:bg-black/90 before:backdrop-blur-sm"
          onKeyDown={handleKeyDown}>
          <BaseDialog.Close
            className="group flex items-center gap-2 outline-0 absolute top-4 right-4 z-10"
            aria-label="Close lightbox">
            <div className="shrink-0 flex size-10 items-center overflow-hidden justify-center whitespace-nowrap outline-0 rounded-full border-2 border-white/60 font-inherit text-[0.75em] font-medium leading-6 select-none focus-visible:outline-2 bg-transparent text-white/60 group-focus-visible:bg-white group-hover:bg-white group-focus-visible:text-black group-hover:text-black transition-colors">
              <span className="mt-px text-sm font-semibold">ESC</span>
            </div>
          </BaseDialog.Close>
          <div className="flex-1 relative flex items-center justify-center min-h-0 px-16">
            <button
              type="button"
              onClick={onPrevClick}
              disabled={prevBtnDisabled}
              aria-label="Previous slide"
              className="absolute left-4 z-10 group w-12 h-12 rounded-full bg-white/10 hover:enabled:bg-white/20 focus-visible:enabled:bg-white/20 text-white/80 hover:enabled:text-white focus-visible:enabled:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors grid place-items-center touch-manipulation">
              <svg className="w-6 h-6" viewBox="0 0 532 532">
                <path
                  fill="currentColor"
                  d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
                />
              </svg>
            </button>
            <div className="overflow-hidden w-full h-full" ref={emblaMainRef}>
              <div className="flex h-full backface-hidden">
                {slides.map((slide, index) => (
                  <div
                    key={"lb-slide-" + slide.url}
                    className="flex-[0_0_100%] min-w-0 h-full flex items-center justify-center p-4 transform-[translate3d(0,0,0)]">
                    <img
                      src={slide.url}
                      alt={slide.alt}
                      className="max-w-full max-h-full object-contain select-none"
                      draggable={false}
                    />
                  </div>
                ))}
              </div>
            </div>
            <button
              type="button"
              onClick={onNextClick}
              disabled={nextBtnDisabled}
              aria-label="Next slide"
              className="absolute right-4 z-10 group w-12 h-12 rounded-full bg-white/10 hover:enabled:bg-white/20 focus-visible:enabled:bg-white/20 text-white/80 hover:enabled:text-white focus-visible:enabled:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors grid place-items-center touch-manipulation">
              <svg className="w-6 h-6" viewBox="0 0 532 532">
                <path
                  fill="currentColor"
                  d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
                />
              </svg>
            </button>
          </div>
          <div className="shrink-0 p-4 bg-black/50">
            <div className="overflow-hidden" ref={emblaThumbsRef}>
              <div className="flex gap-2 backface-hidden">
                {slides.map((slide, index) => (
                  <button
                    key={"lb-thumb-" + slide.url}
                    type="button"
                    onClick={() => onThumbClick(index)}
                    className={cn(
                      "flex-[0_0_80px] min-w-0 aspect-square overflow-hidden border-2 touch-manipulation transform-[translate3d(0,0,0)]",
                      index === selectedIndex
                        ? "border-white opacity-100"
                        : "border-transparent opacity-50 hover:opacity-75"
                    )}>
                    <img
                      src={slide.url}
                      alt={slide.alt}
                      className="w-full h-full object-cover select-none"
                      draggable={false}
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </BaseDialog.Popup>
      </BaseDialog.Portal>
    </BaseDialog.Root>
  );
}
