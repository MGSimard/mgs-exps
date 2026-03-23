import { cn } from "@/lib/utils";

interface SectionProps extends React.ComponentProps<"section"> {
  title: string;
  className?: string;
}

export function Section({ children, title, className }: SectionProps) {
  return (
    <section id={title.toLowerCase()} className={cn("py-4", className)}>
      <h2 className="mb-2 text-2xl font-bold uppercase">{title}</h2>
      {children}
    </section>
  );
}
