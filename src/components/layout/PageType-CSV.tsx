import { Separator } from "@/components/shadcn-ui/separator";
import { Label } from "@/components/elements/Label";
import { cn } from "@/lib/utils";
import { ExternalLink } from "../elements/ExternalLink";

interface PageTypeCSVProps extends React.ComponentProps<"div"> {
  label: string;
  title: string;
  description?: string;
  links?: Array<{ url: string; label: string }>;
}

export function PageTypeCSV({ children, label, title, description, links, className, ...props }: PageTypeCSVProps) {
  return (
    <div className={cn("flex w-full flex-col gap-4", className)} {...props}>
      <h1>
        <Label className="mb-2">{label}</Label>
        <span className="block text-4xl font-bold uppercase">{title}</span>
      </h1>
      {description && <p className="text-muted-foreground italic">{description}</p>}
      {links && (
        <ul>
          {links.map((link) => (
            <li key={link.label}>
              <ExternalLink href={link.url}>{link.label}</ExternalLink>
            </li>
          ))}
        </ul>
      )}
      <Separator />
      {children}
    </div>
  );
}
