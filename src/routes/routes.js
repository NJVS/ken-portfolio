import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Portfolio from '../pages/Portfolio/Portfolio';
import Blogs from '../pages/Blogs/Blogs';
import Services from '../pages/Blogs/Services';
import Contact from '../pages/Contact/Contact';

export const Routes = [
  { path: '/', element: <Home />, },
  { path: '/about', element: <About /> },
  { path: '/portfolio', element: <Portfolio /> },
  { path: '/blog', element: <Blogs /> },
  { path: '/services', element: <Services /> },
  { path: '/contact', element: <Contact /> }
]