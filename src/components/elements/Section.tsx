import { cn } from "@/lib/utils";

interface SectionProps extends React.ComponentProps<"section"> {
  title?: string;
  className?: string;
}

export function Section({ children, title, className, ...props }: SectionProps) {
  return (
    <section id={title?.toLowerCase()} className={cn("space-y-4 py-2", className)} {...props}>
      {title && <h2 className="text-2xl font-bold uppercase">{title}</h2>}
      {children}
    </section>
  );
}
