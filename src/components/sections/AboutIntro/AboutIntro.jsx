import ProgressBar from '../../ProgressBar/ProgressBar';
import WorkOverviewItem from '../../WorkOverviewItem/WorkOverviewItem';

import global from '../../../global.module.scss';
import styles from './AboutIntro.module.scss';
import aboutImg from '../../../assets/images/placeholder_635x795.png';
import { ReactComponent as DottedBg } from '../../../assets/illustration/dot_background.svg';

import { aboutme } from '../../../data/about';

const AboutIntro = ({ designtype }) => {
  return (
    <section className={`${styles.container} ${global.bg_dark}`}>
      <div className={global.container}>
        <figure className={+designtype === 1 ? styles.first : styles.second}>
          <DottedBg />
          <img src={aboutImg} alt="about me image" />
        </figure>
        <article>
          <p className={global.section_title}>About {aboutme.first_name}</p>
          <h2 className={global.section_heading}>{aboutme.intro.title}</h2>
          <p className={global.text_muted}>{aboutme.intro.desc}</p>
          {
            +designtype === 1 ?
              (
                <div className={styles.progress}>
                  {aboutme.intro.skills.map(item => (
                    <ProgressBar key={item.name} title={item.name} value={item.value} />
                  ))}
                </div>
              ) :
              (
                <div className={styles.work_overview}>
                  {aboutme.intro.work_overview.map(item => (
                    <WorkOverviewItem key={item.name.toLowerCase()} name={item.name} value={item.value}/>
                  ))}
                </div>
              )
          }
        </article>
      </div>
    </section>
  )
}

AboutIntro.defaultProps = {
  designtype: 1
}

export default AboutIntro