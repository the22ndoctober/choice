import React from "react"
import { Box, Grid } from "@mui/material"
import { Colors } from "@/client"

const PersonalData = ({ user }) => {
    return (
        <>
            <Grid
                container
                sx={{
                    flexDirection: "column",
                    rowGap: "41px",
                    minHeight: "70svh",
                    p: "46px",
                }}
            ></Grid>
        </>
    )
}

export default PersonalData
