import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";
import { TooltipProvider } from "@/components/shadcn-ui/tooltip";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/shadcn-ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { configMeta, openGraph, twitter, misc, configLinks, favIcons, fontPreloads, styles } from "@/lib/head";

const THEME_INIT_SCRIPT = `(function(){try{var stored=window.localStorage.getItem('theme');var mode=(stored==='light'||stored==='dark')?stored:'dark';var root=document.documentElement;root.setAttribute('data-theme-preference',mode);root.classList.toggle('dark',mode==='dark');root.style.colorScheme=mode;}catch(e){}})();`;

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
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <HeadContent />
      </head>
      <body>
        <div id="root">
          <TooltipProvider>
            <SidebarProvider>
              <AppSidebar />
              <SidebarTrigger className="fixed top-4 left-4 z-50 md:hidden" />
              <SidebarInset className="relative">{children}</SidebarInset>
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
