import { Label } from "@/components/elements/Label";
import { cn } from "@/lib/utils";
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
      <div className="min-h-0 flex-1 overflow-x-hidden overflow-y-auto">
        <table className="w-full table-fixed [&_td]:max-w-0 [&_td]:truncate [&_td]:px-2 [&_td]:py-1 [&_td]:align-middle [&_td]:whitespace-nowrap [&_th]:max-w-0 [&_th]:truncate [&_th]:border-b [&_th]:px-2 [&_th]:py-2 [&_th]:text-left [&_th]:align-middle [&_th]:whitespace-nowrap">
          <thead className="sticky top-0 z-10 bg-background">
            <tr className="font-mono text-sm text-muted-foreground uppercase [&>th]:font-normal">
              <th>name</th>
              <th>url</th>
              <th>tags</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr
                key={row.id}
                className="border-b hover:bg-muted has-[a:hover]:[&_a]:text-primary has-[a:hover]:[&_a]:underline has-[a:focus-visible]:[&_a]:text-primary has-[a:focus-visible]:[&_a]:underline">
                <td>
                  <a href={row.url} target="_blank" rel="noopener noreferrer">
                    {row.name}
                  </a>
                </td>
                <td>
                  <a
                    href={row.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-mono font-muted-foreground text-xs uppercase">
                    {row.url}
                  </a>
                </td>
                <td className="font-mono text-xs font-normal text-muted-foreground uppercase">{row.tags.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="shrink-0 border-t bg-background p-2 font-mono text-xs font-normal text-muted-foreground uppercase">
        {data.length} ROWS
      </div>
    </div>
  );
}
