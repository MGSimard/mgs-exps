import { cn } from "@/lib/utils";

interface LabelProps extends React.ComponentProps<"span"> {
  children: React.ReactNode;
}

export function Label({ children, className, ...props }: LabelProps) {
  return (
    <span
      className={cn(
        "inline-block bg-foreground px-2 py-1 font-mono text-sm leading-none tracking-widest text-background uppercase",
        className
      )}
      {...props}>
      {children}
    </span>
  );
}
