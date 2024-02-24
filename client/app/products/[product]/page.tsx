"use client"

import { GetCategoryProducts } from "@/api/test"
import { Box } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import Navigation from "@/app/components/header/navgitation/Navigation"
import Search from "@/app/components/header/search/Search"

type productID = {
    params: { product_id: string }
}

export default function Product({ params }: any) {
    const { isLoading, error, data, isSuccess }: any = useQuery({
        queryKey: ["product", params.product],
        queryFn: () =>
            GetCategoryProducts(
                params.product.substring(0, params.product.indexOf("_"))
            ),
    })

    if (isLoading) return <div>Loading...</div>

    const product = data.products.find(
        (prod: any) =>
            prod.product_id ===
            params.product.substring(params.product.indexOf("_") + 1)
    )

    return (
        <>
            <Navigation />
            <Search />
            <Box>{product.title}</Box>
        </>
    )
}
