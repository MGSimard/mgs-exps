import * as React from "react";
import { Link, useMatchRoute } from "@tanstack/react-router";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarRail,
  useSidebar,
} from "@/components/shadcn-ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/shadcn-ui/collapsible";
import { ThemeSwitch } from "@/components/layout/ThemeSwitch";
import { IconFile, IconChevronRight, IconFolder, IconCode } from "@tabler/icons-react";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { setOpenMobile } = useSidebar();

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              render={<Link to="/" activeProps={{ "data-active": true }} onClick={() => setOpenMobile(false)} />}>
              <IconCode />
              MGS Experiments
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Notes</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {links.notes.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton
                    render={
                      <Link to={item.path} activeProps={{ "data-active": true }} onClick={() => setOpenMobile(false)} />
                    }>
                    <IconFile />
                    {item.label}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Utility</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {links.utility.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton
                    render={
                      <Link to={item.path} activeProps={{ "data-active": true }} onClick={() => setOpenMobile(false)} />
                    }>
                    <IconFile />
                    {item.label}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Files</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {links.files.map((item, index) => (
                <Tree key={index} node={item} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>References</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {links.references.map((item, index) => (
                <Tree key={index} node={item} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <ThemeSwitch className="ml-auto" />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

function Tree({ node }: { node: TreeNode }) {
  const { setOpenMobile } = useSidebar();
  const matchRoute = useMatchRoute();

  if ("path" in node) {
    return (
      <SidebarMenuItem>
        <SidebarMenuButton
          render={<Link to={node.path} activeProps={{ "data-active": true }} onClick={() => setOpenMobile(false)} />}>
          <IconFile />
          {node.label}
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  }

  // Recursively check if any descendant path matches the current route
  const hasActiveDescendant = (node: TreeNode): boolean => {
    if ("path" in node) {
      // Use fuzzy matching to catch both exact matches and nested routes
      return !!matchRoute({ to: node.path, fuzzy: true });
    }
    return node.children.some(hasActiveDescendant);
  };

  const shouldDefaultOpen = hasActiveDescendant(node);

  return (
    <SidebarMenuItem>
      <Collapsible className="group/collapsible" defaultOpen={shouldDefaultOpen}>
        <SidebarMenuButton render={<CollapsibleTrigger className="group" />}>
          <IconChevronRight className="transition-transform group-data-panel-open:rotate-90" />
          <IconFolder />
          {node.label}
        </SidebarMenuButton>
        <CollapsibleContent>
          <SidebarMenuSub>
            {node.children.map((child, index) => (
              <Tree key={index} node={child} />
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
    </SidebarMenuItem>
  );
}

type RoutePath = string;
type TreeNode = { label: string; path: RoutePath } | { label: string; children: Array<TreeNode> };
interface Links {
  notes: Array<{ label: string; path: RoutePath }>;
  files: Array<TreeNode>;
  references: Array<TreeNode>;
  utility: Array<{ label: string; path: RoutePath }>;
}

const links: Links = {
  notes: [
    {
      label: ".README.md",
      path: "/readme",
    },
    {
      label: "Notes.md",
      path: "/notes",
    },
  ],
  utility: [
    {
      label: "Articles",
      path: "/utility/articles",
    },
    {
      label: "Bookmarks",
      path: "/utility/bookmarks",
    },
    {
      label: "Tools",
      path: "/utility/tools",
    },
    {
      label: "UI Libraries",
      path: "/utility/ui-libraries",
    },
  ],
  files: [
    {
      label: "Components",
      children: [],
    },
    {
      label: "R-EXP",
      children: [
        {
          label: "Logo References",
          path: "/r-exp/logo-refs",
        },
        {
          label: "Moodboard",
          path: "/r-exp/moodboard",
        },
      ],
    },
  ],
  references: [
    {
      label: "References",
      children: [
        {
          label: "Dmitry Kurash",
          path: "/references/dmitry-kurash",
        },
        {
          label: "James Lee",
          path: "/references/james-lee",
        },
        {
          label: "Kyle Anthony Miller",
          path: "/references/kyle-anthony-miller",
        },
        {
          label: "Kuba",
          path: "/references/kuba",
        },
        {
          label: "Marathon",
          path: "/references/marathon",
        },
        {
          label: "Serge Tyutik",
          path: "/references/serge-tyutik",
        },
      ],
    },
    {
      label: "Showcases",
      children: [
        {
          label: "Firewatch",
          path: "/showcases/firewatch",
        },
        {
          label: "Shoya Kajita",
          path: "/showcases/shoya-kajita",
        },
      ],
    },
  ],
};
