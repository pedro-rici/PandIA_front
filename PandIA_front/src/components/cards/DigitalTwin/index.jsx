import { Box } from "@mui/material"
import { cardColumns, cardView } from "@/styles/cards"
import CardMap from "../cardMap"
import DigitalTwinContent from "./content"

export default function DigitalTwinComponent({ data }) {
    return (
        <Box sx={cardView} >
            <Box sx={cardColumns}>
                {   // CORRIGIR KEY
                    data.map((info, i) => {
                        const content = []
                        if (info.average) {
                            content.push(<DigitalTwinContent key={i} average={true} data={info} />)
                        }
                        if (info.total) {
                            content.push(<DigitalTwinContent key={i + 1} average={false} data={info} />)
                        }
                        return content
                    })
                }
            </Box>
            <Box sx={cardColumns}>
                {/* Corrigir props passada */}
                <CardMap data={data[0]} map={null} />
            </Box>
        </Box >
    )
}
