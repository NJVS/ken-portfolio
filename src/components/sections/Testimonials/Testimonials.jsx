import { useState } from 'react';

import global from '../../../global.module.scss';
import styles from './Testimonials.module.scss'

import { testimonials } from '../../../data/testimonials';

import { ReactComponent as QuoteIcon } from '../../../assets/icons/quotes.svg';
import { ReactComponent as ArrowRight } from '../../../assets/icons/arrow-right.svg';
import { ReactComponent as ArrowLeft } from '../../../assets/icons/arrow-left.svg';
import figureImg from '../../../assets/images/placeholder_724x592.png';

const Testimonials = ({ bg, bgDark }) => {
  const [testimonialState, setTestimonialState] = useState(1);

  console.log(testimonialState)
  console.log(testimonials.length)
  return (
    <section className={`${styles.container} ${bgDark ? global.bg_dark : ''}`}>
      <div className={global.container}>
        <div className={styles.header}>
          <p className={global.section_title}>Testimonials</p>
          <h2 className={global.section_heading}>Nothing tells story like our photos</h2>
        </div>
        <div className={styles.body}>
          <figure>
            <img src={figureImg} alt="replace this to a video" />
          </figure>
          <div className={styles.article}>
            <QuoteIcon />
            <ul>
              {testimonials.map((item, index) => (
                <li
                  key={item.name}
                  className={(index + 1 === testimonialState) ? styles.active : ''}
                >
                  <p className={global.text_muted}>{item.comment}</p>
                  <div>
                    <p className={styles.name}>{item.name}</p>
                    <p className={styles.title}>{item.title}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className={styles.buttons}>
              <button
                onClick={() => testimonialState <= 1
                  ? setTestimonialState(testimonials.length)
                  : setTestimonialState(testimonialState - 1)
                }
              ><ArrowLeft /></button>
              <button
                onClick={() => testimonialState >= testimonials.length
                  ? setTestimonialState(1)
                  : setTestimonialState(testimonialState + 1)
                }
              ><ArrowRight /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

Testimonials.defaultProps = {
  bg: 'light',
  bgDark: false
}

export default Testimonials