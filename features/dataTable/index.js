import { useSelector } from 'react-redux';
import { selectLatestRows } from '../../store/kline/klineSlice'

export function DataTable () {
  const data = useSelector(selectLatestRows)
  
  return (
    <div name="orderbook" className="orderbook">
      <table>
        <thead>
          <tr>
            <th>
              <h2><p>Time</p></h2>
            </th>
            <th>
              <h2>Open(BTC)</h2>
            </th>
            <th>
              <h2>Close(BTC)</h2>
            </th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 && data.map((item, key) => {
            const date = new Date(item.E).toTimeString().replace(' GMT+0000 (Greenwich Mean Time)', '')
            return(
              <tr key={key}>
                <td>
                  <p>{date}</p>
                </td>
                <td>
                  <p>{Math.round(item.k.o * 100) / 100}</p>
                </td>
                <td>
                <p>{Math.round(item.k.c * 100) / 100}</p>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}