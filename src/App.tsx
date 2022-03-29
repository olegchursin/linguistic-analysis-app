import './App.css';

import { Outlet, ReactLocation, Router } from '@tanstack/react-location';

import Dictionary from './components/Dictionary';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Navbar from './components/Navbar';

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
