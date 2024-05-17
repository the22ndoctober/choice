"use client"
import { Colors } from "@/client"
import { Box, Grid } from "@mui/material"
import { logoNav, logoSquare } from "../../static/logo"
import { useSelector, useDispatch } from "react-redux"
import CircularProgress from "@mui/joy/CircularProgress"

const BackdropLoading = () => {
    const getStatus = useSelector((state) => state.categories.status)

    return (
        <>
            {getStatus === "loading" && (
                <Box
                    sx={{
                        width: "100%",
                        height: "100%",
                        background: Colors.white,
                        position: "fixed",
                        top: 0,
                        left: 0,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 1000,
                        rowGap: 3,
                    }}
                >
                    {logoSquare}
                    <CircularProgress size="lg" />
                </Box>
            )}
        </>
    )
}

export default BackdropLoading
