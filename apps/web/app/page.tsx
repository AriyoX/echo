"use client"

import { SignInButton, UserButton } from "@clerk/nextjs"
import { Authenticated, Unauthenticated, useMutation, useQuery } from "convex/react"
import { api } from "@workspace/backend/_generated/api"
import { Button } from "@workspace/ui/components/button"

export default function Page() {
  const users = useQuery(api.users.getMany)
  const addUser = useMutation(api.users.add)

  return (
    <>
      <Authenticated>
        <div className="flex flex-col items-center justify-center gap-4"> 
          <p>apps/web</p>
          <UserButton />
          <Button onClick={() => addUser()}>
            Add User
          </Button>
          <div className="flex flex-col items-center justify-center gap-4">
            {JSON.stringify(users, null, 2)}
          </div>
        </div>
      </Authenticated>
      <Unauthenticated>
        <div className="flex flex-col items-center justify-center gap-4">
          <p>Please log in to see the users.</p>
          <SignInButton>Sign In</SignInButton>
        </div>
      </Unauthenticated>
    </>
  )
}
