import { Link } from 'react-router-dom';

import styles from './CardServices.module.scss';

import { ReactComponent as LinkIcon } from '../../assets/icons/arrow-up.svg';

const CardServices = ({ icon, title, desc, link }) => {
  return (
    <div className={styles.container}>
      {icon}
      <h4>{title}</h4>
      <p>{desc}</p>
      <Link to={link}>Read More <LinkIcon /></Link>
    </div>
  )
}

export default CardServices