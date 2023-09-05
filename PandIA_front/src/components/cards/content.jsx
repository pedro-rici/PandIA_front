import { Box, Typography } from "@mui/material"

export default function Content({ average, data }) {
    return (
        <Box sx={{
            bgcolor: 'grey.200',
            maxWidth: '75%',
            height: '100%',
            p: 2,
            textAlign: 'center',
            borderRadius: 2,
            filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'
        }}>
            <Typography variant="caption">
                Consumption in <b>{data?.zone}</b> for <b>{data?.consumerType}</b> consumers in <b>{data?.initialMonth}</b>
            </Typography>
            <Typography variant="h3">
                {average ? (
                    <b>{data?.average}</b>
                ) : (
                    <b>{data?.total}</b>
                )}
            </Typography>
            <Typography variant="caption">
                {average ? (
                    'Average by consumer'
                ) : (
                    'Total in the zone'
                )}
            </Typography>
        </Box>
    )
}
