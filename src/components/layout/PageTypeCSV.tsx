import { useState } from "react";
import { Label } from "@/components/elements/Label";
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from "@/components/shadcn-ui/combobox";
import { cn } from "@/lib/utils";
import { Input } from "../shadcn-ui/input";

type CSVRow = {
  id: string;
  name: string;
  url: string;
  tags: Array<string>;
};

function normalizeForSearch(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/[^a-z0-9]+/g, "");
}

interface PageTypeCSVProps extends React.ComponentProps<"div"> {
  label: string;
  title: string;
  description?: string;
  data: Array<CSVRow>;
}

export function PageTypeCSV({ label, title, description, data, className, ...props }: PageTypeCSVProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<Array<string>>([]);
  const anchor = useComboboxAnchor();

  const allTags = Array.from(new Set(data.flatMap((row) => row.tags))).sort((a, b) => a.localeCompare(b));
  const normalizedQuery = normalizeForSearch(searchQuery);
  const normalizedSelectedTags = selectedTags.map((tag) => normalizeForSearch(tag));
  const filteredData = data.filter((row) => {
    const searchBlob = normalizeForSearch(`${row.name} ${row.url} ${row.tags.join(" ")}`);
    const normalizedTags = row.tags.map((tag) => normalizeForSearch(tag));
    const matchesQuery = normalizedQuery.length === 0 || searchBlob.includes(normalizedQuery);
    const matchesTags = normalizedSelectedTags.every((selectedTag) => normalizedTags.includes(selectedTag));
    return matchesQuery && matchesTags;
  });

  return (
    <div className={cn("flex h-dvh min-h-0 w-full flex-col overflow-hidden", className)} {...props}>
      <div className="shrink-0 space-y-4 border-b px-4 py-4">
        <h1>
          <Label className="mb-2">{label}</Label>
          <span className="block text-4xl font-bold uppercase">{title}</span>
        </h1>
        {description && <p className="text-muted-foreground italic">{description}</p>}
        <div className="flex flex-wrap items-start gap-2">
          <Input
            type="search"
            placeholder="Search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            autoCorrect="off"
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
            className="w-fit"
          />
          <Combobox multiple autoHighlight items={allTags} value={selectedTags} onValueChange={setSelectedTags}>
            <ComboboxChips ref={anchor}>
              <ComboboxValue>
                {(values) => (
                  <>
                    {values.map((value: string) => (
                      <ComboboxChip key={value}>{value}</ComboboxChip>
                    ))}
                    <ComboboxChipsInput placeholder="Filter tags" />
                  </>
                )}
              </ComboboxValue>
            </ComboboxChips>
            <ComboboxContent anchor={anchor}>
              <ComboboxEmpty>No tags found.</ComboboxEmpty>
              <ComboboxList>
                {(item) => (
                  <ComboboxItem key={item} value={item}>
                    {item}
                  </ComboboxItem>
                )}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        </div>
      </div>
      <div className="min-h-0 flex-1 overflow-x-hidden overflow-y-auto">
        <table className="w-full table-fixed [&_td]:max-w-0 [&_td]:truncate [&_td]:px-4 [&_td]:py-1 [&_td]:align-middle [&_td]:whitespace-nowrap [&_th]:max-w-0 [&_th]:truncate [&_th]:border-b [&_th]:px-4 [&_th]:py-2 [&_th]:text-left [&_th]:align-middle [&_th]:whitespace-nowrap">
          <thead className="sticky top-0 z-1 bg-background/70">
            <tr className="font-mono text-sm text-muted-foreground uppercase [&>th]:font-normal">
              <th>name</th>
              <th>url</th>
              <th>tags</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row) => (
              <tr
                key={row.id}
                className="border-b hover:bg-muted has-[a:focus-visible]:[&_a]:text-primary has-[a:focus-visible]:[&_a]:underline has-[a:hover]:[&_a]:text-primary has-[a:hover]:[&_a]:underline">
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
      <div className="shrink-0 border-t bg-background px-4 py-2 font-mono text-xs font-normal text-muted-foreground uppercase">
        {filteredData.length} ROWS
      </div>
    </div>
  );
}
