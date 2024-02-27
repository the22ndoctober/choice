"use client"

import { GetProducts } from "@/api/test"
import { Box } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import Navigation from "@/app/components/header/navgitation/Navigation"
import Search from "@/app/components/header/search/Search"
import ProductItem from "@/app/components/main/products/ProductItem"
import HeadLinks from "@/app/components/header/headLinks/HeadLinks"

export default function Product({ params }: any) {
    const { isLoading, error, data, isSuccess }: any = useQuery({
        queryKey: ["product", params.product],
        queryFn: () => GetProducts(params.product),
    })

    if (isLoading) return <div>Loading...</div>

    return (
        <>
            <Navigation />
            <Search />
            <Box sx={{ px: { sm: "51px" }, py: { sm: "28px" } }}>
                <HeadLinks
                    links={[
                        {
                            url: params.product,
                            title: "Category",
                        },
                        { url: params.product, title: data.products[0].title },
                    ]}
                />
                <ProductItem product={data.products[0]} />
            </Box>
        </>
    )
}
