import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addData, getInitialData } from '../../store/kline/klineSlice'
import { KlineGraph } from './graph'
import { KlineGraphRaw } from './graph-raw'
import { DataTable } from '../dataTable'
import { KlineGraphHardware } from './graph-hardware';

export function Kline ({raw = false, hardware = false}) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getInitialData())
      const conn = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@kline_1m");  

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
    
    if (raw) {
      conn.close()
    }

    return () => {
      conn.close()
    }
    

  }, [dispatch, raw])

  return (
    <div className="app-controller">
      <div name="left" className="left"></div>
      <DataTable />

      {raw ? ( 
        hardware ? (
          <KlineGraphHardware />
        ) : (
          <KlineGraphRaw />
        )
      ) : ( 
        <KlineGraph />  
      )}
      
      
      <div name="right" className="right"></div>
    </div>
  )
}