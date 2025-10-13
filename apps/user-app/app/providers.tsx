"use client"
import { RecoilRoot } from "recoil";
import { SessionProvider } from "next-auth/react";
import { Analytics } from "@vercel/analytics/next"

export const Providers = ({children}: {children: React.ReactNode}) => {
    return <RecoilRoot>
        <SessionProvider>
            <Analytics />
            {children}
        </SessionProvider>
    </RecoilRoot>
}