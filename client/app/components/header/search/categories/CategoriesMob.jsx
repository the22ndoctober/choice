import { Box, Button, Input, Grid, Typography } from "@mui/material"
import { Colors } from "@/client"
import { useRouter } from "next/navigation"
import { useState } from "react"
import CategoryItem from "./CategoryItem"
import CloseIcon from "@mui/icons-material/Close"

const CategoriesMob = ({ data, setCat }) => {
    const [selectedCategory, setSelectedCategory] = useState(null)
    const router = useRouter()

    return (
        <>
            {open && (
                <Box
                    sx={{
                        height: "calc(100vh - 140px)",
                        width: "100%",
                        background: Colors.paper,
                    }}
                >
                    <Box
                        sx={{
                            margin: "0 auto",
                            width: { xs: 360 },
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            py: "32px",
                            position: "relative",
                            overflowY: "scroll",
                            pr: "32px",
                        }}
                    >
                        <Box
                            sx={{
                                position: "absolute",
                                right: "5px",
                                top: "5px",
                            }}
                            onClick={() => {
                                setCat(false)
                            }}
                        >
                            <CloseIcon />
                        </Box>
                        {data.map((cat) => {
                            if (cat.category.level > 1) {
                                return
                            }
                            return (
                                <CategoryItem
                                    key={cat.category.title}
                                    categoryInfo={cat}
                                    setSelected={setSelectedCategory}
                                    selectedCat={selectedCategory}
                                />
                            )
                        })}
                    </Box>
                </Box>
            )}
        </>
    )
}

export default CategoriesMob
