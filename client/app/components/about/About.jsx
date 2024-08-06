import { Colors } from "@/client"
import { Box } from "@mui/material"
import React from "react"

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
            ></Box>
        </Box>
    )
}

export default About
