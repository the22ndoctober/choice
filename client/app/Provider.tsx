"use client"
import React, { useState } from "react"
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { SessionProvider } from "next-auth/react"

function Provider({ children }: any) {
    const [client] = useState(new QueryClient())

    return (
        <>
            <SessionProvider>
                <QueryClientProvider client={client}>
                    <ReactQueryStreamedHydration>
                        {children}
                    </ReactQueryStreamedHydration>
                    <ReactQueryDevtools initialIsOpen={false} />
                </QueryClientProvider>
            </SessionProvider>
        </>
    )
}

export { Provider }
