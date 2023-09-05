import { Box, Typography, Container } from "@mui/material"
import { cardMap } from "@/styles/cards"

export default function CardMap({ data, map }) {
  return (
    <Box sx={cardMap}>
      <Typography variant="caption" style={{fontWeight: 400, fontSize: 16 }}>
          Consumption in <b>{data?.zone}</b> for <b>{data?.consumerType}</b> consumers in <b>{data?.initialMonth}</b>
        </Typography>
    </Box>
  )
}
