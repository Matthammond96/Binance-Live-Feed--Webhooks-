import React, { useEffect } from 'react'
import data from '../../store/data.json' 
import { options } from './options'
import Chart from 'react-apexcharts'

export function KlineGraphRaw () { 
  // 1499040000000,      // Open time
  // "0.01634790",       // Open 1
  // "0.80000000",       // High 2
  // "0.01575800",       // Low 3
  // "0.01577100",       // Close 4

  const dataSeries = React.useMemo(() => {
    console.log("Processing...")
    return data.map(i => ({x: new Date(i[0]), y: i.slice(1, 5)}))
  })

  const series = [{
    data: dataSeries
  }]

  useEffect(() => {
    console.log(data[0])
    console.log(data[0].slice(1,5))
  }, [])

  return (
    <div name="graph" className="graph">
      <Chart options={options} series={series} type="candlestick" />
    </div>
  )
}