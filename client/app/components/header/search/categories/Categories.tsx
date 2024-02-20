import { Box } from "@mui/material"
import CategoryItem from "./CategoryItem"

const Categories = ({ categories }: any) => {
    return (
        <Box
            sx={{
                width: 300,
                height: { sm: 850 },
                position: "absolute",
                bottom: -850,
                left: 51,
                background: "#fff",
                zIndex: 2000,
            }}
        >
            {categories.categories.map((cat: any) => (
                <CategoryItem key={cat.category_id} categoryInfo={cat} />
            ))}
        </Box>
    )
}

export default Categories
