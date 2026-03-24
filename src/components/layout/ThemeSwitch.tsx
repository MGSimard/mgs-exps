import { useEffect, useState } from "react";
import { useTheme } from "@/components/layout/ThemeProvider";
import { Switch } from "@/components/shadcn-ui/switch";
import { IconSun } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export function ThemeSwitch({ className }: { className?: string }) {
  const { theme: activeTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only render after mounting to prevent hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isLight = activeTheme === "light";

  return (
    <label htmlFor="theme-switch" className={cn("flex cursor-pointer! items-center gap-2 select-none", className)}>
      <IconSun className={cn("size-4", isLight && "fill-current")} />
      <Switch
        id="theme-switch"
        checked={isLight}
        onCheckedChange={(checked) => setTheme(checked ? "light" : "dark")}
        aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      />
    </label>
  );
}
