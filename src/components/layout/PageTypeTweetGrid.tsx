import { useState } from "react";
import { Label } from "@/components/elements/Label";
import { TweetPreviewCard } from "@/components/elements/TweetPreviewCard";
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
import { Input } from "@/components/shadcn-ui/input";
import type { TweetBookmark } from "@/data/tweet-bookmarks";
import { cn } from "@/lib/utils";

interface PageTypeTweetGridProps extends React.ComponentProps<"div"> {
  label: string;
  title: string;
  description?: string;
  data: Array<TweetBookmark>;
}

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

export function PageTypeTweetGrid({ label, title, description, data, className, ...props }: PageTypeTweetGridProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<Array<string>>([]);
  const anchor = useComboboxAnchor();

  const allTags = Array.from(new Set(data.flatMap((tweet) => tweet.tags))).sort((a, b) => a.localeCompare(b));
  const normalizedQuery = normalizeForSearch(searchQuery);
  const normalizedSelectedTags = selectedTags.map((tag) => normalizeForSearch(tag));
  const filteredData = data.filter((tweet) => {
    const searchBlob = normalizeForSearch(
      `${tweet.authorName} ${tweet.authorHandle} ${tweet.text} ${tweet.url} ${tweet.tags.join(" ")}`
    );
    const normalizedTags = tweet.tags.map((tag) => normalizeForSearch(tag));
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
        {description ? <p className="max-w-3xl text-muted-foreground italic">{description}</p> : null}
        <div className="flex flex-wrap items-start gap-2">
          <Input
            type="search"
            placeholder="Search tweets"
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
        {filteredData.length > 0 ? (
          <div className="columns-[320px] gap-3 px-4 py-4 [&>a]:mb-3 [&>a]:block [&>a]:w-full [&>a]:break-inside-avoid">
            {filteredData.map((tweet) => (
              <TweetPreviewCard key={tweet.id} tweet={tweet} />
            ))}
          </div>
        ) : (
          <div className="flex h-full items-center justify-center px-4 py-8">
            <div className="w-full max-w-md border border-dashed bg-muted/20 px-6 py-8 text-center">
              <p className="font-mono text-sm text-muted-foreground uppercase">No tweet previews match this filter.</p>
            </div>
          </div>
        )}
      </div>

      <div className="shrink-0 border-t bg-background px-4 py-2 font-mono text-xs font-normal text-muted-foreground uppercase">
        {filteredData.length} Tweets
      </div>
    </div>
  );
}
