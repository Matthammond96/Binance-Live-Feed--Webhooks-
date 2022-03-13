import { Link } from 'react-router-dom'
import styles from './navigation.module.css'

export const Navigation = () => (
  <div className={styles.navigation}>
    <img src="https://blockscholes.com/wp-content/uploads/2021/10/Group_-2.png" alt="blockscholes" />

    <ul className={styles.menu}>
      <li>
        <Link to="/">
          <p>Live Candlestick Websocket</p>
        </Link>
      </li>
      <li>
        <Link to="/raw">
          <p>Graph Using 39924 Data Points</p>
        </Link>
      </li>
      <li>
        <Link to="/raw-hardware">
          <p>Graph Using 39924 Data Points (Hardware Acceleratted)</p>
        </Link>
      </li>
    </ul>
  </div>
)