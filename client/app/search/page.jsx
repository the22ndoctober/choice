import React from "react"
import ProductsSearch from "../components/header/search/productsSearch/ProductsSearch"
import Navigation from "@/app/components/header/navgitation/Navigation"
import Search from "@/app/components/header/search/Search"

const ProductsSearchPage = () => {
    return (
        <>
            <Navigation />
            <Search params={""} />
            <ProductsSearch />
        </>
    )
}

export default ProductsSearchPage
