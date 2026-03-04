import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type MasonryGridProps = {
  children: ReactNode;
  className?: string;
};

export function MasonryGrid({ children, className }: MasonryGridProps) {
  return (
    <div
      className={cn(
        "columns-[300px] gap-2 [&>img]:mb-2 [&>img]:block [&>img]:w-full [&>img]:break-inside-avoid [&>img]:border",
        className
      )}>
      {children}
    </div>
  );
}
