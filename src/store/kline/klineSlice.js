import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: []
};

// MAKE ASYNC REQUEST NOT SYNC WORK
export const getInitialData = createAsyncThunk(
  'kline/getInitialData',
  async () => {
    const result = []
    const url = "https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m&limit=30"
    var request = new XMLHttpRequest()
    request.open('GET', url,false)
    request.onload = () => {
      result.push(request.responseText)
    }
    request.send()
    
    return result
  }
)

export const klineSlice = createSlice({
  name: 'kline',
  initialState,
  reducers: {
    addData(state, action) {
      state.data.push(action.payload)
    }
   },
   extraReducers: (builder) => {
    builder.addCase(
      getInitialData.fulfilled, (state, action) => { 
        const json = JSON.parse(action.payload)
        const formatted = json.map(item => ({
          E: item[0],
          k: {
            o: item[1],
            h: item[2],
            l: item[3],
            c: item[4]
          }
        }))

        state.data = formatted
      }
    )
  } 
});

// Dispatch actions events
export const { addData } = klineSlice.actions;

// Selectora actions
export const selectData = (state) => state.kline.data;
export const selectLatestRows = (state) => {
  if (state.kline.data.length < 11) return state.kline.data
  const result = state.kline.data

  return state.kline.data.slice(result.length - 30, result.length)
}


export default klineSlice.reducer;
