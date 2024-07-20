import { Box, Button, Input, Grid, Typography } from "@mui/material"
import { Colors } from "@/client"
import { useRouter } from "next/navigation"
import { useState } from "react"
import CategoryItem from "./CategoryItem"
import CloseIcon from "@mui/icons-material/Close"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import SubCategory from "./SubCategory"

const CategoriesMob = ({ data, setCat }) => {
    const [selectedCategory, setSelectedCategory] = useState(null)
    const router = useRouter()

    console.log(selectedCategory)

    return (
        <>
            {open && (
                <Box
                    sx={{
                        height: "100vh",
                        width: "100%",
                        background: Colors.paper,
                        zIndex: 999,
                        position: "fixed",
                        top: 0,
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
                            // overflowY: "scroll",
                            pr: "32px",
                        }}
                    >
                        <Box
                            sx={{
                                position: "absolute",
                                right: "5px",
                                top: "5px",
                                zIndex: 1001,
                            }}
                            onClick={() => {
                                if (selectedCategory === null) {
                                    setCat(false)
                                } else {
                                    setSelectedCategory(null)
                                }
                            }}
                        >
                            {selectedCategory === null ? (
                                <CloseIcon
                                    sx={{
                                        "& :hover": {
                                            color: Colors.neutral,
                                        },
                                    }}
                                />
                            ) : (
                                <>
                                    <ArrowBackIosIcon
                                        sx={{
                                            "& :hover": {
                                                color: Colors.neutral,
                                            },
                                        }}
                                    />
                                </>
                            )}
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
                        {selectedCategory !== null && (
                            <Grid
                                container
                                direction={"column"}
                                sx={{
                                    width: { xs: 360, lg: "100%" },
                                    height: "100%",
                                    flexWrap: "wrap",
                                    columnGap: 2,
                                    rowGap: 2,
                                    px: 4,
                                    pt: 1,
                                    pb: 1,
                                    position: "fixed",
                                    zIndex: 1000,
                                    background: Colors.paper,
                                }}
                            >
                                <Box
                                    sx={{
                                        overflowY: "scroll",
                                        py: "24px",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            color: Colors.dark,
                                            fontStyle: "normal",
                                            fontWeight: 400,
                                            fontSize: {
                                                xs: "18px",
                                                lg: "16px",
                                            },
                                            lineHeight: "19px",
                                            maxWidth: { xs: 360, lg: 350 },
                                            cursor: "pointer",
                                            ":hover": {
                                                color: Colors.teal,
                                            },
                                        }}
                                        onClick={() => {
                                            router.push(
                                                `/categories?query=${selectedCategory.category.title}`
                                            )
                                        }}
                                    >
                                        {selectedCategory.category.title}
                                    </Box>
                                    {selectedCategory.child !== null &&
                                        selectedCategory.child.map((child) => (
                                            <>
                                                <SubCategory
                                                    key={child.product_id}
                                                    categoryInfo={child}
                                                    parent={selectedCategory}
                                                />
                                            </>
                                        ))}
                                </Box>
                            </Grid>
                        )}
                    </Box>
                </Box>
            )}
        </>
    )
}

export default CategoriesMob
