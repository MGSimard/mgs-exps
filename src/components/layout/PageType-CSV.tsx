import { Label } from "@/components/elements/Label";
import { cn } from "@/lib/utils";

const COLUMN_KEYS = ["name", "url", "tags"] as const;
type CSVRow = {
  id: string;
  name: string;
  url: string;
  tags: Array<string>;
};

interface PageTypeCSVProps extends React.ComponentProps<"div"> {
  label: string;
  title: string;
  description?: string;
  data: Array<CSVRow>;
}

// TODO: Make table component embedded in PageTypeCSV, so only thing that each page will need is the data (same columns as well)

export function PageTypeCSV({ label, title, description, data, className, ...props }: PageTypeCSVProps) {
  return (
    <div className={cn("flex h-dvh min-h-0 w-full flex-col overflow-hidden", className)} {...props}>
      <div className="shrink-0 border-b px-4 py-2">
        <h1>
          <Label className="mb-2">{label}</Label>
          <span className="block text-4xl font-bold uppercase">{title}</span>
        </h1>
        {description && <p className="text-muted-foreground italic">{description}</p>}
        <input type="search" placeholder="Search" className="w-full" />
      </div>
      <div className="min-h-0 flex-1 overflow-auto">
        <table className="w-full [&_td]:px-2 [&_td]:py-1">
          <thead className="sticky top-0 z-10 bg-background">
            <tr>
              {COLUMN_KEYS.map((key) => (
                <th key={key} className="border-b px-2 py-2 text-left">
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id} className="border-b">
                {COLUMN_KEYS.map((key) => (
                  <td key={key}>{key === "tags" ? row.tags.join(", ") : row[key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="shrink-0 border-t bg-background px-2 py-2">Table Footer Area</div>
    </div>
  );
}
