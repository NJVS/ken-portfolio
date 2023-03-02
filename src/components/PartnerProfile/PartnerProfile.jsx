import { Link } from 'react-router-dom';

import global from '../../global.module.scss';
import styles from './PartnerProfile.module.scss';

import { ReactComponent as IconFacebook } from '../../assets/icons/facebook.svg';
import { ReactComponent as IconTwitter } from '../../assets/icons/twitter.svg';
import { ReactComponent as IconInstagram } from '../../assets/icons/instagram.svg';
import { ReactComponent as IconLinkedin } from '../../assets/icons/linkedin.svg';

const PartnerProfile = ({ name, title, pic, socials, bgDark }) => {
  return (
    <div className={styles.container}>
      <figure>
        <div className={`${styles.img_background} ${!bgDark ? global.bg_dark : global.bg_light}`}></div>
        <img src={pic} alt={`${name} profile`} />
      </figure>
      <h4 className={styles.name}>{name}</h4>
      <p className={styles.title}>{title}</p>
      <ul className={styles.socials}>
        <li><Link to={socials.facebook}><IconFacebook /></Link></li>
        <li><Link to={socials.twitter}><IconTwitter /></Link></li>
        <li><Link to={socials.instagram}><IconInstagram /></Link></li>
        <li><Link to={socials.linkedin}><IconLinkedin /></Link></li>
      </ul>
    </div>
  )
}

export default PartnerProfile