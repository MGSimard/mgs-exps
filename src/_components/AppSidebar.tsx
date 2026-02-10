import * as React from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/_components/shadcn-ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
} from "@/_components/shadcn-ui/sidebar";
import { Link, useMatchRoute } from "@tanstack/react-router";
import { FileIcon, ChevronRightIcon, FolderIcon } from "lucide-react";
import { useSidebar } from "@/_components/shadcn-ui/sidebar";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { setOpenMobile } = useSidebar();
  return (
    <Sidebar {...props}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Notes</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {links.notes.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton render={<Link to={item.path} onClick={() => setOpenMobile(false)} />}>
                    <FileIcon />
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
              {links.tree.map((item, index) => (
                <Tree key={index} node={item} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
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
          <FileIcon />
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
          <ChevronRightIcon className="transition-transform group-data-panel-open:rotate-90" />
          <FolderIcon />
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
type TreeNode = { label: string; path: RoutePath } | { label: string; children: TreeNode[] };
type Links = {
  notes: { label: string; path: RoutePath }[];
  tree: TreeNode[];
};

const links: Links = {
  notes: [
    {
      label: "README.md",
      path: "/readme",
    },
    {
      label: "Notes.md",
      path: "/notes",
    },
  ],
  tree: [
    {
      label: "Components",
      children: [
        {
          label: "Hero",
          children: [
            {
              label: "Grainient Focus",
              path: "/components/hero/grainient-focus",
            },
          ],
        },
      ],
    },
    {
      label: "R-EXP",
      children: [
        {
          label: "Logo References",
          path: "/r-exp/logo-refs",
        },
      ],
    },
  ],
};
