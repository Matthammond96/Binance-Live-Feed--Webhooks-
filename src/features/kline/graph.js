import React   from 'react'
import { useSelector } from 'react-redux';
import { selectData } from '../../store/kline/klineSlice'
import { options } from './options'
import Chart from 'react-apexcharts'

export function KlineGraph () {
  const data = useSelector(selectData)
  const candlestick = data.map(item => ({x: new Date(item.E), y: [item.k.o, item.k.h, item.k.l, item.k.c]}))
  const series = [{
    data: candlestick
  }]

  return (
    <div name="graph" className="graph">
      <Chart options={options} series={series} type="candlestick" />
    </div>
  )
}