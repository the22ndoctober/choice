import { Colors } from "@/client"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import SearchIcon from "@mui/icons-material/Search"

const SearchCategoryItem = ({ category }: any) => {
    return (
        <>
            <Grid container sx={{ direction: "row" }}>
                <Box sx={{ display: "flex", direction: "row", columnGap: 1 }}>
                    <SearchIcon sx={{ color: Colors.dark }} />
                    <Typography sx={{ color: Colors.dark, fontSize: "14px" }}>
                        {category.title}
                    </Typography>
                </Box>
            </Grid>
        </>
    )
}

export default SearchCategoryItem
