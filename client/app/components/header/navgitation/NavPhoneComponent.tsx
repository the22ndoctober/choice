"use client"

import { useState } from "react"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { Colors } from "@/client"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { phoneIcon } from "../../static/phoneIcon"
import InputBase from "@mui/material/InputBase"
import Button from "@mui/material/Button"

const dropableStyles = {
    position: "absolute",
    left: 0,
    width: { lg: "264px" },
    height: { lg: "364px" },
    background: Colors.paper,
    borderRadius: "15px",
    top: "10px",
    rowGap: "18px",
    zIndex: 3,
}

const NavPhoneComponent = () => {
    const [open, setOpen] = useState<boolean>(false)

    const wrapperStyles = {
        alignItems: "center",
        minWidth: { lg: "264px" },
        zIndex: { sm: 5 },
        position: "relative",
    }

    const typoStyles = {
        fontSize: "16px",
        color: Colors.maxDark,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        columnGap: "19px",
        postion: open ? "absolute" : "static",
    }

    const pStyles = {
        fontSize: "12px",
        color: Colors.grey,
        columnGap: "19px",
        display: "flex",
        alignItems: "center",
        postion: open ? "absolute" : "static",
    }

    return (
        <div
            onMouseEnter={() => {
                setOpen(true)
            }}
            onMouseLeave={() => {
                setOpen(false)
            }}
        >
            <Grid sx={wrapperStyles}>
                <Box sx={{ position: "static" }}>
                    <Box sx={typoStyles}>
                        <Box sx={{ width: "25px" }}></Box>
                        {!open && "044 503 70 20"}
                        <Box
                            sx={{
                                width: "24px",
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            {!open && <ExpandMoreIcon />}
                        </Box>
                    </Box>
                </Box>
            </Grid>
            {open && (
                <Grid container sx={dropableStyles}>
                    <Grid
                        container
                        sx={{
                            flexDirection: "column",
                            alignItems: "center",
                            height: "auto",

                            rowGap: "16px",
                        }}
                    >
                        <Box sx={{ position: "static" }}>
                            <Box sx={typoStyles}>
                                <Box sx={{ width: "25px" }}>
                                    {open && phoneIcon}
                                </Box>
                                044 503 70 20{" "}
                                <Box
                                    sx={{
                                        width: "24px",
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    {!open && <ExpandMoreIcon />}
                                </Box>
                            </Box>
                            <Box sx={pStyles}>
                                <Box sx={{ width: "25px" }}></Box>Оформити
                                замовлення
                            </Box>
                            <Box sx={pStyles}>
                                <Box sx={{ width: "25px" }}></Box>9:00 - 21:00
                            </Box>
                        </Box>
                        <Box sx={{ position: "static" }}>
                            <Box sx={typoStyles}>
                                <Box sx={{ width: "25px" }}>
                                    {open && phoneIcon}
                                </Box>
                                044 503 70 20{" "}
                                <Box
                                    sx={{
                                        width: "24px",
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    {!open && <ExpandMoreIcon />}
                                </Box>
                            </Box>
                            <Box sx={pStyles}>
                                <Box sx={{ width: "25px" }}></Box>Служба
                                Підтримки
                            </Box>
                            <Box sx={pStyles}>
                                <Box sx={{ width: "25px" }}></Box>9:00 - 21:00
                            </Box>
                        </Box>
                    </Grid>
                    <Box sx={{ fontSize: "14px", margin: "0 auto" }}>Або</Box>
                    <Grid
                        container
                        direction={"column"}
                        sx={{ px: "29px", rowGap: "14px", pb: "28px" }}
                    >
                        <Box sx={{ fontSize: "16px" }}>Передзвонити мені</Box>

                        <InputBase
                            defaultValue={"+380"}
                            sx={{
                                width: "100%",
                                border: `2px solid ${Colors.grey}`,
                                borderRadius: "15px",
                                "& .MuiInputBase-input": {
                                    ml: "-10px",
                                    textAlign: "center",
                                },
                            }}
                        />

                        <Button
                            sx={{
                                width: "100%",
                                borderRadius: "15px",
                                color: Colors.white,
                                background: Colors.teal,
                                fontSize: "16px",
                                fontWeight: 400,
                                textTransform: "none",
                            }}
                        >
                            Очікую на дзвінок
                        </Button>
                    </Grid>
                </Grid>
            )}
        </div>
    )
}

export default NavPhoneComponent
