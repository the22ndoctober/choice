import React from "react"
import Navigation from "@/app/components/header/navgitation/Navigation"
import Search from "@/app/components/header/search/Search"
import CategoriesSearch from "../components/header/search/productsSearch/CategoriesSearch"

const CategoriesSearchPage = ({ params }) => {
    console.log(params)
    return (
        <>
            <Navigation />
            <Search params={params.query} />
            <CategoriesSearch />
        </>
    )
}

export default CategoriesSearchPage
