"use server"
import db from "@repo/db/client"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth"


export async function createOnrampTransaction({ provider, amount}: { provider: string; amount: number}) {
    const session = await getServerSession(authOptions);
    const userId = Number(session.user.id)
    // this token comes from banking api in real world scenario
    const token = Math.random().toString();
    if(!session.user)
    return {
        message: "unauthenticated request"
    }
    const onrampTransaction = await db.onRampTransaction.create({
        data: {
            startTime: new Date(),
            status: "Processing",
            provider: provider,
            userId: userId,
            amount: amount,
            token: token
        }
    })
    return {
        message: "Onramp transaction started",
        token
    }
}