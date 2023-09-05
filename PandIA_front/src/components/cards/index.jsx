import DigitalTwinComponent from "./DigitalTwin"
import RealTimeComponent from "./RealTime"
import { Box, Typography, Container } from "@mui/material"

export default function CardView({ data, digitalTwin = true }) {
    return (
        
        digitalTwin ? (
                <DigitalTwinComponent data={data} />
        ) : (
            <RealTimeComponent data={data} />
        )
    )
}