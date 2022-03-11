import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { selectData } from '../../store/kline/klineSlice'
import Chart from 'react-apexcharts'

export function KlineGraph () {
  const [graphType, setGraphType] = useState("candlestick")
  const data = useSelector(selectData)
  const candlestick = data.map(item => ({x: new Date(item.E), y: [item.k.o, item.k.h, item.k.l, item.k.c]}))

  const series = [{
    data: candlestick
  }]
  
  const options =  {
    chart: {
      type: 'candlestick',
      height: 350
    },
    title: {
      text: 'CandleStick Chart',
      align: 'left'
    },
    xaxis: {
      type: 'datetime'
    },
    yaxis: {
      tooltip: {
        enabled: true
      }
    }
  }


  return (
    <div name="graph" className="graph">
      <Chart options={options} series={series} type={graphType} />
    </div>
  )
}