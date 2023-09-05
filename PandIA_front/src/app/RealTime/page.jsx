"use client"

import { useState } from "react"
import CardView from '../../components/cards'
import SimpleSimulatorControll from "@/components/simpleSimulatorControll"

export default function RealTime() {
    const [data, setData] = useState([{
        zone: 'Samil',
        consumerType: 'Domestic',
        initialMonth: 'March',
        consumptionGraph: 'consumption',
        populationGraph: 'population',
        preciptationGraph: 'preciptation',
        calendar: 'calendar'
    }])

    return (
        <main>
            <SimpleSimulatorControll />
            <CardView data={data} digitalTwin={false} />
        </main>
    )
}