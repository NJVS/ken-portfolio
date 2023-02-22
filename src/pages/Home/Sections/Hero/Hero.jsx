import { Link } from 'react-router-dom';
import global from '../../../../global.module.scss';
import styles from './Hero.module.scss';

import { ReactComponent as IconFacebook } from '../../../../assets/icons/facebook.svg';
import { ReactComponent as IconTwitter } from '../../../../assets/icons/twitter.svg';
import { ReactComponent as IconYoutube } from '../../../../assets/icons/youtube.svg';
import { ReactComponent as IconInstagram } from '../../../../assets/icons/instagram.svg';
import { ReactComponent as IconLinkedin } from '../../../../assets/icons/linkedin.svg';

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={`${styles.main} ${global.container}`}>
        <p className={`${global.section_title} ${global.light}`}>
          Hello, I am Ken Orinion
        </p>
        <h1 className={global.section_heading}>
          The power to capture the world in a single image
        </h1>
        <p className={global.text_muted}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In massa velit,
          dictum ac mattis eu, condimentum sit amet libero.
        </p>
        <Link to="#overview" className={global.button}>Get Started</Link>
      </div>
      <ul className={`${styles.social} ${global.container}`}>
        <li><Link to='https://facebook.com'><IconFacebook /></Link></li>
        <li><Link to='https://twitter.com'><IconTwitter /></Link></li>
        <li><Link to='https://youtube.com'><IconYoutube /></Link></li>
        <li><Link to='https://instagram.com'><IconInstagram /></Link></li>
        <li><Link to='https://linkedin.com'><IconLinkedin /></Link></li>
      </ul>
      <div className={`${styles.footer} ${global.bg_dark}`}>
        <ul className={global.container}>
          <li>
            <p>Experience</p>
            <p className={global.text_muted}>15+ Years of Experience</p>
          </li>
          <li>
            <p>Services</p>
            <p className={global.text_muted}>
              Photography, Videography, Cinematic
            </p>
          </li>
          <li>
            <p>Partners</p>
            <p className={global.text_muted}>
              John Doe, Jane Doe, Adam Smith
            </p>
          </li>
          <li>
            <p>Achievements</p>
            <p className={global.text_muted}>
              Photography Awards, Videography Awards
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Hero