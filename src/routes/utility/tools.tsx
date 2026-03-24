import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/utility/tools')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/utility/tools"!</div>
}
