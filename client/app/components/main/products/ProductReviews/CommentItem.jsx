import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import { Colors } from "@/client"

const CommentItem = ({ name, rating, text }) => {
    return (
        <>
            <Box
                sx={{
                    background: Colors.paper,
                    borderRadius: "15px",
                    p: "21px",
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "12px",
                    height: "100%",
                }}
            >
                <Box
                    sx={{
                        fontSize: "16px",
                    }}
                >
                    {name}
                </Box>
                <Box
                    sx={{
                        fontSize: "14px",
                    }}
                >
                    {text}
                </Box>
            </Box>
        </>
    )
}

export default CommentItem
