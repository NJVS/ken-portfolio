import { useRoutes } from "react-router-dom";
import { Routes } from './routes/routes';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import styles from './App.module.scss';

function App() {
  const routes = useRoutes(Routes);
  return (
    <div className={styles.container}>
      <Navbar />
      <main>
        {routes}
      </main>
      <Footer />
    </div>
  );
}

export default App;
