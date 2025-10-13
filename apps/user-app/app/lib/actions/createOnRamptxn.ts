"use server"

import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import { prisma } from "@repo/db";

export async function createOnRampTransaction(amount: number, provider: string) {
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id;
    const token = Math.random().toString()
    if (!userId) {
        throw new Error("User not authenticated");
    
    }

    await prisma.onRampTransaction.create({
        data: {
            userId: Number(userId),
            amount: amount,
            provider: provider,
            status: "Processing",
            startTime: new Date(),
            token: token
        }
    })

    return {
        message: "Transaction created successfully",
    }
}