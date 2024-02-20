import { Box } from "@mui/material"
import Navigation from "./components/header/navgitation/Navigation"
import Search from "./components/header/search/Search"
import AdvertismentMain from "./components/main/AdvertismentMain"

export default function Home() {
    return (
        <>
            <Box className="global-content-wrapper">
                <Navigation />
                <Search />
                <AdvertismentMain />
            </Box>
        </>
    )
}
