"use client"

import { Box, Grid, InputBase } from "@mui/material"
import Slider from "@mui/joy/Slider"
import React, { useEffect, useState } from "react"
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
    setFiltersOpen,
    screenWidth,
}) => {
    const [queryMin, setQueryMin] = useState(min)
    const [queryMax, setQueryMax] = useState(max)
    const [sliderGap, setSliderGap] = useState([0, 0])

    useEffect(() => {
        setQueryMin(min)
        setQueryMax(max)
    }, [min, max])

    useEffect(() => {
        setSliderGap([min, max])
    }, [min, max])

    const handleChange = (event, newValue) => {
        setQueryMin(newValue[0])
        setQueryMax(newValue[1])
    }

    const handleMinMaxPrice = () => {
        setCurrentMin(queryMin)
        setCurrentMax(queryMax)
        if (screenWidth <= 1280) {
            setFiltersOpen(false)
        }
    }

    return (
        <>
            <Accordion sx={{ width: "100%" }} defaultExpanded={true}>
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
                            value={queryMin}
                            onChange={(e) => {
                                if (e.target.value < min) {
                                    alert("Число менше мінімального")
                                    setQueryMin(min)
                                    return
                                }
                                if (e.target.value > queryMax) {
                                    alert("Число більше максимального")
                                    setQueryMin(min)
                                    return
                                }
                                setQueryMin(e.target.value)
                            }}
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
                            value={queryMax}
                            onChange={(e) => {
                                if (e.target.value > max) {
                                    alert("Число більше максимального")
                                    setQueryMax(max)
                                    return
                                }
                                if (e.target.value < queryMin) {
                                    alert("Число менше мінімального")
                                    setQueryMax(max)
                                    return
                                }
                                setQueryMax(e.target.value)
                            }}
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
                                cursor: "pointer",
                            }}
                            onClick={handleMinMaxPrice}
                        >
                            Ок
                        </Box>
                    </Grid>
                    <Box sx={{ width: "calc(100% - 36px)", margin: "0 auto" }}>
                        <Slider
                            getAriaLabel={() => "Price"}
                            min={sliderGap[0]}
                            max={sliderGap[1]}
                            value={[queryMin, queryMax]}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                        />
                    </Box>
                </AccordionDetails>
            </Accordion>
        </>
    )
}

export default PriceFIlter
