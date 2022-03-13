export const options =  {
  chart: {
    type: 'candlestick',
    height: 350,
    animations: {
      enabled: false, //no animations
    }
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