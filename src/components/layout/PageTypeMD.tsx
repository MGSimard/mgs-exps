import { Label } from "@/components/elements/Label";
import { Separator } from "@/components/shadcn-ui/separator";
import { ExternalLink } from "@/components/elements/ExternalLink";
import { cn } from "@/lib/utils";

interface PageTypeMDProps extends React.ComponentProps<"div"> {
  label: string;
  title: string;
  description?: string;
  links?: Array<{ url: string; label: string }>;
}

export function PageTypeMD({ children, label, title, description, links, className, ...props }: PageTypeMDProps) {
  return (
    <div className={cn("mx-auto flex w-full max-w-5xl flex-col gap-4 px-4 pt-24 pb-32", className)} {...props}>
      <h1>
        <Label className="mb-2">{label}</Label>
        <span className="block text-4xl font-bold uppercase">{title}</span>
      </h1>
      {description && <p className="text-muted-foreground">{description}</p>}
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
