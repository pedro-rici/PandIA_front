import { cardItems } from "@/styles/cards"
import { Box, Typography, Container } from "@mui/material"

export default function RealTimeContent({ children, graph }) {
    return (
        <Box sx={{
            bgcolor: 'grey.200',
            width: '13rem',
            height: '12rem',
            p: 2,
            textAlign: 'center',
            borderRadius: 2,
            filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
            textAlign: 'left',
        }}>
            
                <Typography variant="caption" style={{fontSize: "16px"}}>
                    {children}
                </Typography>
            
            
            <Box>
                {graph}
            </Box>
        </Box>
    )
}
