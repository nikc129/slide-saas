'use server'
import { client } from "@/lib/prisma"
import { currentUser } from "@clerk/nextjs/server"
import { onCurrentUser } from "../users"

export const updateIntegration = async (
    token: string,
    expire: Date,
    id: string
  ) => {
    return await client.integrations.update({
      where: { id },
      data: {
        token,
        expiresAt: expire,
      },
    })
  }


 