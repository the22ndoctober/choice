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
                }}
            >
                <Box>{name}</Box>
                <Box>{text}</Box>
            </Box>
        </>
    )
}

export default CommentItem
