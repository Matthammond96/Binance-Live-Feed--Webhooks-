import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addData, getInitialData } from '../../store/kline/klineSlice'
import { KlineGraph } from './graph'
import { DataTable } from '../dataTable'

const conn = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@kline_1m");

export function Kline () {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getInitialData())

    conn.onopen = function(evt) {
      // send Subscribe/Unsubscribe messages here (see below)
      console.log(evt)
    }
  
    conn.onmessage = function(evt) {
      if (evt.data) {
        const json = JSON.parse(evt.data)
        dispatch(addData(json))
      }
      // console.info('received data', evt.data)
    } 
  
    conn.onerror = function(evt) {
      console.error('an error occurred', evt.data)
    }
  }, [dispatch])

  return (
    <div className="app-controller">
      <div name="left" className="left"></div>
      <DataTable />
      <KlineGraph />
      <div name="right" className="right"></div>
    </div>
  )
}