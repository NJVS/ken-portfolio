import global from '../../global.module.scss';
import styles from './Home.module.scss';
import { MainHero } from '../../components/sections/Hero/Hero';
import AboutIntro from '../../components/sections/AboutIntro/AboutIntro';
import { Services1 } from '../../components/sections/Services/Services';
import Testimonials from '../../components/sections/Testimonials/Testimonials';
import TopPartners from '../../components/sections/TopPartners/TopPartners';

const Home = () => {
  return (
    <>
      {/* <Hero /> */}
      <MainHero />
      <AboutIntro designtype='1' />
      <Services1 />
      <TopPartners />
      <Testimonials bgDark={true} />
    </>
  )
}

export default Home