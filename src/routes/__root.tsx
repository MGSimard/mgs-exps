import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { TooltipProvider } from "@/components/shadcn-ui/tooltip";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/shadcn-ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { configMeta, openGraph, twitter, misc, configLinks, favIcons, fontPreloads, styles } from "@/lib/head";

export const Route = createRootRoute({
  head: () => ({
    meta: [...configMeta, ...openGraph, ...twitter, ...misc],
    links: [...configLinks, ...favIcons, ...fontPreloads, ...styles],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <div id="root">
          <ThemeProvider>
            <TooltipProvider>
              <SidebarProvider>
                <AppSidebar />
                <SidebarTrigger className="fixed top-4 left-4 z-50 md:hidden" />
                <SidebarInset className="relative">{children}</SidebarInset>
              </SidebarProvider>
            </TooltipProvider>
          </ThemeProvider>
        </div>
        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}
