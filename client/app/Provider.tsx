"use client"
import React, { useState } from "react"
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { SessionProvider } from "next-auth/react"
import { Provider as Providers } from "react-redux"
import { store } from "./redux/store"

function Provider({ children }: any) {
    const [client] = useState(new QueryClient())

    return (
        <>
            <Providers store={store}>
                <SessionProvider>
                    <QueryClientProvider client={client}>
                        <ReactQueryStreamedHydration>
                            {children}
                        </ReactQueryStreamedHydration>
                        <ReactQueryDevtools />
                    </QueryClientProvider>
                </SessionProvider>
            </Providers>
        </>
    )
}

export { Provider }
