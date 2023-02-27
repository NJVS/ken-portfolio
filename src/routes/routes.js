import Home from '../pages/Home/Home';
import AboutMe from '../pages/AboutMe/AboutMe';
import Portfolio from '../pages/Portfolio/Portfolio';
import Blogs from '../pages/Blogs/Blogs';
import Services from '../pages/Services/Services';
import Contact from '../pages/Contact/Contact';

export const Routes = [
  { path: '/', element: <Home />, },
  { path: '/aboutme', element: <AboutMe /> },
  { path: '/portfolio', element: <Portfolio /> },
  { path: '/blogs', element: <Blogs /> },
  { path: '/services', element: <Services /> },
  { path: '/contact', element: <Contact /> }
]