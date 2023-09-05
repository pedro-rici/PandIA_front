"use client"

import { useState } from "react"
import SimulatorControll from "@/components/simulatorControll";
import CardView from '../../components/cards'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700']
})

export default function DigitalTwin() {

    const [data, setData] = useState([{
        zone: 'Samil',
        consumerType: 'Domestic',
        initialMonth: 'March',
        average: '5',
        total: '355'
    }])

    return (
        <main className={inter.className}>
            <SimulatorControll />
            <CardView data={data} />
        </main>
    )
}