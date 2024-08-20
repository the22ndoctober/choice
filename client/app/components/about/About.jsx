import { Colors } from "@/client"
import { Box } from "@mui/material"
import React from "react"
import AboutHeader from "./AboutHeader"
import AboutMission from "./AboutMission"
import VideoAbout from "../main/videoAbout/VideoAbout"

const About = () => {
    return (
        <Box
            sx={{
                bgcolor: Colors.paper,
                width: "100%",
                minHeight: "70vh",
            }}
        >
            <Box
                sx={{
                    width: { xs: 360, lg: 1368, xl: 1440 },
                    margin: "0 auto",
                }}
            >
                <AboutHeader />
                <AboutMission />
                <VideoAbout />
            </Box>
        </Box>
    )
}

export default About
