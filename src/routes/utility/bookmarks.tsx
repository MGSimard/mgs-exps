import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/utility/bookmarks')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/utility/bookmarks"!</div>
}
