import { Link, NavLink, useLocation } from 'react-router-dom';

import global from '../../global.module.scss';
import styles from './Navbar.module.scss';

import { ReactComponent as ArrowUp } from '../../assets/icons/arrow-up.svg';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [navToggled, setNavToggled] = useState(false);

  // hide nav_links when location changes (with 0.5s delay)
  const location = useLocation();
  useEffect(() => {
    setNavToggled(false)
    // setTimeout(() => setNavToggled(false), 500);
  }, [location]);

  // disable scrolling while nav is toggled
  useEffect(() => {
    document.documentElement.style.overflow = navToggled ? 'hidden' : '';
  }, [navToggled]);

  // untoggled nav everytime window resolution changes
  const handleResize = () => setNavToggled(false);
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className={styles.container}>
      <div className={global.container}>
        <Link to='/' className={styles.logo}>K</Link>
        <hr />
        <button
          className={`${styles.nav_toggler} ${navToggled ? styles.toggled : ''}`}
          onClick={() => setNavToggled(!navToggled)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`${styles.nav_links} ${navToggled ? styles.toggled : ''}`}>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/portfolio'>Portfolio</NavLink></li>
          <li><NavLink to='/services'>Services</NavLink></li>
          <li><NavLink to='/blogs'>Blogs</NavLink></li>
          <li><NavLink to='/contact'>Let's Talk <ArrowUp /></NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar