"use client"

import React from "react"
import ProductsSearch from "../components/header/search/productsSearch/ProductsSearch"
import Navigation from "@/app/components/header/navgitation/Navigation"
import Search from "@/app/components/header/search/Search"
import { useRouter } from "next/router"

const ProductsSearchPage = () => {
    // const router = useRouter()
    // const { pathname } = router

    // // Extract page name from pathname
    // const pageName = pathname.substring(1) // Assuming your page URLs start with "/"

    return (
        <>
            <Navigation />
            <Search params={""} />
            <ProductsSearch />
        </>
    )
}

export default ProductsSearchPage
