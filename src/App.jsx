import { useRoutes } from "react-router-dom";
import { Routes } from './routes/routes';

import Navbar from './components/Navbar/Navbar';


function App() {
  const routes = useRoutes(Routes);
  return (
    <>
      <Navbar />
      {routes}
      <Footer />
    </>
  );
}

export default App;
