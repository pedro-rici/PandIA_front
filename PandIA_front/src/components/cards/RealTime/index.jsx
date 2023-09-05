import { Box } from "@mui/material"
import { cardColumns, cardView } from "@/styles/cards"
import CardMap from "../cardMap"
import RealTimeContent from "./content"

export default function RealTimeComponent({ data }) {
  return (
    <Box sx={cardView}>
      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 10
      }}>
        {   // CORRIGIR KEY
          data.map((info, i) => {
            const content = []
            if (info.consumptionGraph) {
              content.push(
                <RealTimeContent key={i} graph={info.consumptionGraph} >
                  <b>Consumption</b> in <b>{info?.zone}</b> for <b>{info?.consumerType}</b> consumers in <b>{info?.initialMonth}</b> by <b>Year</b>
                </RealTimeContent>
              )
            }
            if (info.populationGraph) {
              content.push(
                <RealTimeContent key={i + 1} graph={info.populationGraph}>
                  <b>Consumption</b> and <b>Population</b> in <b>{info?.zone}</b> for <b>{info?.consumerType}</b> consumers in <b>{info?.initialMonth}</b> by <b>Year</b>
                </RealTimeContent>
              )
            }
            if (info.preciptationGraph) {
              content.push(<RealTimeContent key={i + 2} graph={info.preciptationGraph}>
                <b>Preciptation</b> and <b>Consumption</b> in <b>{info?.zone}</b> for <b>{info?.consumerType}</b> consumers in <b>{info?.initialMonth}</b> by <b>Year</b>
              </RealTimeContent>
              )
            }
            if (info.calendar) {
              content.push(<RealTimeContent key={i + 3} graph={info.calendar} />)
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
