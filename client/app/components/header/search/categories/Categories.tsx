import { Box } from "@mui/material"
import CategoryItem from "./CategoryItem"
import { CategoriesStyles } from "./styles/styles"

const Categories = ({ categories }: any) => {
    return (
        <Box
            sx={{
                ...CategoriesStyles.wrapper,
            }}
        >
            {categories.map((cat: any) => (
                <CategoryItem key={cat.category_id} categoryInfo={cat} />
            ))}
        </Box>
    )
}

export default Categories
