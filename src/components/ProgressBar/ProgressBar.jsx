import styles from './ProgressBar.module.scss';

const ProgressBar = ({ title, value }) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <p className={styles.value} style={{right: `${100 - value}%`}}>{value}%</p>
      <div className={styles.bar}>
        <div style={{width: `${value}%`}}></div>
      </div>
    </div>
  )
}

export default ProgressBar