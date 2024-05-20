import React, { Suspense } from "react"
import ProductsSearch from "../components/header/search/productsSearch/ProductsSearch"
import Navigation from "@/app/components/header/navgitation/Navigation"
import Search from "@/app/components/header/search/Search"

const ProductsSearchPage = ({ params }) => {
    console.log(params)
    return (
        <>
            <Navigation />
            <Search params={params.query} />
            <Suspense>
                <ProductsSearch />
            </Suspense>
        </>
    )
}

export default ProductsSearchPage
