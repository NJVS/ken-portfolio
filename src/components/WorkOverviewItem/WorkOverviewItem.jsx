import global from '../../global.module.scss';
import styles from './WorkOverviewItem.module.scss';

const WorkOverviewItem = ({ name, value }) => {
  return (
    <div className={styles.container}>
      <h2>{value}</h2>
      <p>{name}</p>
    </div>
  )
}

export default WorkOverviewItem