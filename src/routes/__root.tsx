import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";
import { TooltipProvider } from "@/_components/shadcn-ui/tooltip";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/_components/shadcn-ui/sidebar";
import { AppSidebar } from "@/_components/app-sidebar";
import appCss from "@/_styles/global.css?url";
import fontCss from "@/_styles/fonts.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "TanStack Start Starter",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "stylesheet",
        href: fontCss,
      },
    ],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <div id="root">
          <TooltipProvider>
            <SidebarProvider>
              <AppSidebar />
              <SidebarInset className="relative">
                <SidebarTrigger className="absolute top-0 left-0 z-10" />
                {children}
              </SidebarInset>
            </SidebarProvider>
          </TooltipProvider>
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
