import styles from './navigation.module.css'

export const Navigation = () => (
  <div className={styles.navigation}>
    <img src="https://blockscholes.com/wp-content/uploads/2021/10/Group_-2.png" alt="blockscholes" />

    <ul className={styles.menu}>
      <li>
        <p>Markets</p>
      </li>
      <li>
        <p>Trade</p>
      </li>
      <li>
        <p>Dirivaties</p>
      </li>
    </ul>
  </div>
)