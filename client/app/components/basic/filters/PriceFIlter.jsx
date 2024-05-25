import { Box, Grid, InputBase } from "@mui/material"
import React from "react"
import Accordion from "@mui/joy/Accordion"
import AccordionDetails from "@mui/joy/AccordionDetails"
import AccordionSummary from "@mui/joy/AccordionSummary"
import { Colors } from "@/client"

const PriceFIlter = ({
    min,
    max,
    currentMin,
    currentMax,
    setCurrentMin,
    setCurrentMax,
}) => {
    return (
        <>
            <Accordion sx={{ width: "100%" }}>
                <AccordionSummary
                    sx={{
                        py: "6px",
                        color: Colors.light,
                    }}
                >
                    Ціна
                </AccordionSummary>
                <AccordionDetails>
                    <Grid
                        container
                        sx={{
                            py: "16px",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <InputBase
                            placeholder="min value"
                            value={currentMin}
                            onChange={(e) => setCurrentMin(e.target.value)}
                            sx={{
                                width: "fit-content",
                                height: "38px",
                                border: `2px solid ${Colors.grey}`,
                                borderRadius: "15px",
                                background: Colors.paper,

                                "& .MuiInputBase-input": {
                                    height: "38px",
                                    width: "50px",
                                    px: "12px",
                                    color: Colors.maxDark,
                                },
                            }}
                        />
                        <Box
                            sx={{
                                color: Colors.neutral,
                            }}
                        >
                            -
                        </Box>

                        <InputBase
                            placeholder="max-value"
                            value={currentMax}
                            onChange={(e) => setCurrentMax(e.target.value)}
                            sx={{
                                width: "fit-content",
                                height: "38px",
                                border: `2px solid ${Colors.grey}`,
                                borderRadius: "15px",
                                background: Colors.paper,

                                "& .MuiInputBase-input": {
                                    height: "38px",
                                    width: "50px",
                                    px: "12px",
                                    color: Colors.maxDark,
                                },
                            }}
                        />
                        <Box
                            sx={{
                                background: Colors.neutral,
                                color: Colors.white,
                                borderRadius: "15px",
                                fontSize: "14px",
                                fontWeight: 600,
                                lineHeight: "16.94px",

                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                height: "38px",
                                px: "16px",
                                width: "fit-content",
                            }}
                        >
                            Ок
                        </Box>
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </>
    )
}

export default PriceFIlter
