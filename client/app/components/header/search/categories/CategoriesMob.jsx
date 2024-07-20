import { Box, Button, Input, Grid, Typography } from "@mui/material"
import { Colors } from "@/client"

const CategoriesMob = ({ data }) => {
    return (
        <>
            {open && (
                <Box
                    sx={{
                        height: "calc(100vh - )",
                        width: "100%",
                        background: Colors.paper,
                    }}
                >
                    <Box
                        sx={{
                            margin: "0 auto",
                            width: { xs: 360 },
                            py: 1,
                        }}
                    >
                        GDgsklgsj;s
                    </Box>
                </Box>
            )}
        </>
    )
}

export default CategoriesMob
