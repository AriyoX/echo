"use client"

import { useMutation, useQuery } from "convex/react"
import { api } from "@workspace/backend/_generated/api"
import { Button } from "@workspace/ui/components/button"

export default function Page() {
  const users = useQuery(api.users.getMany)
  const addUser = useMutation(api.users.add)

  return (
    <div className="flex items-center justify-center min-h-svh">
      <p>apps/web</p>
      <Button onClick={() => addUser()}>
        Add User
      </Button>
      <div className="flex flex-col items-center justify-center gap-4">
        {JSON.stringify(users, null, 2)}
      </div>
    </div>
  )
}
