import { Box } from "@mui/material"

import AdvertismentMain from "./components/main/AdvertismentMain"
import BestOffers from "./components/main/bestOffers/BestOffers"
import NewProducts from "./components/main/newProducts/NewProducts"
import Smartphones from "./components/main/smartphones/Smartphones"
import PopularBrends from "./components/main/popularBrends/PopularBrends"
import VideoAbout from "./components/main/videoAbout/VideoAbout"
import InfoMain from "./components/main/infoMain/InfoMain"
import DeliveryInfo from "./components/main/deliveryInfo/DeliveryInfo"
import Navigation from "./components/header/navgitation/Navigation"
import Search from "./components/header/search/Search"

export default function Home({ params }: any) {
    return (
        <>
            <Box className="global-content-wrapper">
                <Navigation />
                <Search params="" />
                <AdvertismentMain />
                <BestOffers />
                <NewProducts />
                <Smartphones />
                <PopularBrends />
                <VideoAbout />
                <InfoMain />
                <DeliveryInfo />
            </Box>
        </>
    )
}
