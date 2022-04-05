import './App.css';

import { Outlet, ReactLocation, Router } from '@tanstack/react-location';

import Footer from './components/organisms/Footer';
import Navbar from './components/organisms/Navbar';
import Dictionary from './components/pages/Dictionary';
import Landing from './components/pages/Landing';

const location = new ReactLocation();

function App() {
  return (
    <Router
      location={location}
      routes={[
        { path: '/', element: <Landing /> },
        {
          path: 'dictionary',
          element: <Dictionary />
        }
      ]}
    >
      <Navbar />
      <Outlet /> {/* Start rendering router matches */}
      <Footer />
    </Router>
  );
}

export default App;
