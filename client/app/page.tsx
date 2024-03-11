import { Box } from "@mui/material"

import AdvertismentMain from "./components/main/AdvertismentMain"
import BestOffers from "./components/main/bestOffers/BestOffers"

export default function Home() {
    return (
        <>
            <Box className="global-content-wrapper">
                <AdvertismentMain />
                <BestOffers />
            </Box>
        </>
    )
}
