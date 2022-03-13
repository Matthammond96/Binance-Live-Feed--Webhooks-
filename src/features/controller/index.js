import React from 'react';
import { Provider } from 'react-redux';
import { Kline } from '../kline'
import { store } from '../../store/store'

function Controller ({raw = false, hardware = false}) {  
  return (
    <div className="controller">
      <Provider store={store}>
        <Kline raw={raw} hardware={hardware} />  
      </Provider>
    </div>
  )
}

export default React.memo(Controller)