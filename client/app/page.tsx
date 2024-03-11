import { Box } from "@mui/material"

import AdvertismentMain from "./components/main/AdvertismentMain"
import BestOffers from "./components/main/bestOffers/BestOffers"
import NewProducts from "./components/main/newProducts/NewProducts"
import Smartphones from "./components/main/smartphones/Smartphones"
import PopularBrends from "./components/main/popularBrends/PopularBrends"

export default function Home() {
    return (
        <>
            <Box className="global-content-wrapper">
                <AdvertismentMain />
                <BestOffers />
                <NewProducts />
                <Smartphones />
                <PopularBrends />
            </Box>
        </>
    )
}
