import { cn } from "@/lib/utils";

interface ExternalLinkProps extends React.ComponentProps<"a"> {
  children: React.ReactNode;
  className?: string;
}

export function ExternalLink({ children, className, ...props }: ExternalLinkProps) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "font-mono font-light tracking-tighter text-muted-foreground uppercase underline decoration-[0.0625rem] hover:text-primary focus-visible:text-primary",
        className
      )}
      {...props}>
      {children}
    </a>
  );
}
