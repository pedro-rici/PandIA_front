import { cardItems } from "@/styles/cards"
import { Box, Typography, Container } from "@mui/material"

export default function DigitalTwinContent({ average, data }) {
    return (
            <Box sx={cardItems}>
                <Container style={{textAlign: 'left'}}>
                    <Typography variant="caption" style={{fontWeight: 400, fontSize: 16, textAlign:"left"}}>
                        <b style={{fontWeight: 700}}>Consumption</b> in <b style={{fontWeight: 700}}>{data?.zone}</b> for <b style={{fontWeight: 700}}>{data?.consumerType}</b> consumers in <b style={{fontWeight: 700}}>{data?.initialMonth}</b>
                    </Typography>
                </Container>
                
                <Typography variant="h3" style={{fontSize: 80}}>
                    {average ? (
                        <b>{data?.average}</b>
                    ) : (
                        <b>{data?.total}</b>
                    )}
                </Typography>
                <Typography variant="caption" style={{fontWeight: 400, fontSize: 17.9}}>
                    {average ? (
                        'Average by consumer'
                    ) : (
                        'Total in the zone'
                    )}
                </Typography>
            </Box>
    )
}
