import { createRouter } from "@tanstack/react-router";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const router = createRouter({
    routeTree,
    context: {},
    defaultPreload: "intent",
    defaultPreloadStaleTime: 0,
    defaultViewTransition: true,
    scrollRestoration: true,
    defaultErrorComponent: (props) => <div>Error: {props.error.message}</div>, // TASK
    defaultNotFoundComponent: () => <div>Not Found</div>, // TASK
    Wrap: ({ children }: { children: React.ReactNode }) => (
      <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
    ),
  });

  return router;
};
