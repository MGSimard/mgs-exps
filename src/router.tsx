import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const router = createRouter({
    routeTree,
    context: {},
    defaultPreload: "intent",
    defaultPreloadStaleTime: 0,
    defaultViewTransition: false,
    scrollRestoration: true,
    defaultErrorComponent: (props) => <div>Error: {props.error.message}</div>, // TASK
    defaultNotFoundComponent: () => <div>Not Found</div>, // TASK
  });

  return router;
};
