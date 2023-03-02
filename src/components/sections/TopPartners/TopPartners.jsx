import { Link } from 'react-router-dom';

import PartnerProfile from '../../PartnerProfile/PartnerProfile';
import { partners } from '../../../data/partners';

import global from '../../../global.module.scss';
import styles from './TopPartners.module.scss';

const TopPartners = ({ bgDark }) => {
  return (
    <div className={`${styles.container} ${bgDark ? global.bg_dark : ''} `}>
      <div className={global.container}>
        <div className={styles.header}>
          <p className={`${global.section_title} ${!bgDark ? global.light : ''}`}>My Partners</p>
          <div>
            <h2 className={global.section_heading}>Meet my trusted partners</h2>
            <Link to='/aboutme/partners' className={global.button}>View All</Link>
          </div>
        </div>
        <div className={styles.body}>
          {partners.map(item => (
            <PartnerProfile
              key={item.name.toLowerCase()}
              name={item.name} 
              title={item.title} 
              pic={item.profile_picture} 
              socials={item.socials}
              bgDark={bgDark}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

TopPartners.defaultProps = {
  bgDark: false
}

export default TopPartners