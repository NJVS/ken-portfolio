import { Link } from "react-router-dom";
import CardServices from "../../CardServices/CardServices";

import global from '../../../global.module.scss';
import styles from './Services.module.scss';

import { services } from "../../../data/services";

export const Services1 = () => {
  return (
    <section className={`${styles.container1} ${global.bg_dark}`}>
      <div className={global.container}>
        <div className={styles.header}>
          <p className={global.section_title}>My Services</p>
          <h2 className={global.section_heading}>Life through photos</h2>
          <Link to="/services" className={global.button}>All Services</Link>
        </div>
        {services.map(({ icon, title, desc }) => (title !== 'Commercial') && (
          <CardServices
            key={title}
            icon={icon}
            title={title}
            desc={desc}
            link={`/services/${title.toLowerCase()}`}
          />
        ))}
      </div>
    </section>
  )
}

export const Services2 = () => {
  return (
    <section className={`${styles.container2} ${global.bg_dark}`}>
      <div className={global.container}>
        <div className={styles.header}>
          <p className={global.section_title}>My Services</p>
          <h2 className={global.section_heading}>Life through photos</h2>
        </div>
        <div className={styles.body}>
        {services.map(({ icon, title, desc }) => (
          <CardServices
            key={title}
            icon={icon}
            title={title}
            desc={desc}
            link={`/services/${title.toLowerCase()}`}
          />
        ))}
        </div>
      </div>
    </section>
  );
}