import React from "react"
import Footer from "@/app/components/footer/Footer"
import SaveTheWorld from "@/app/components/saveTheWorld/SaveTheWorld"
import Navigtaion from "@/app/components/header/navgitation/Navigation"
import Search from "@/app/components/header/search/Search"

const SaveTheWorldPage = () => {
    return (
        <>
            <Navigtaion />
            <Search />
            <SaveTheWorld />
        </>
    )
}

export default SaveTheWorldPage
