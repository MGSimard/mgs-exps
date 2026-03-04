import { cn } from "@/lib/utils";

type GridProps = {
  children: React.ReactNode;
  className?: string;
};

export function Grid({ children, className }: GridProps) {
  return <div className={cn("grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-2", className)}>{children}</div>;
}
