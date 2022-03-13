import React from 'react';
import { Provider } from 'react-redux';
import { Kline } from '../kline'
import { store } from '../../store/store'

export function Controller () {
  return (
    <div className="controller">
      <Provider store={store}>
        <Kline />  
      </Provider>
    </div>
  )
}