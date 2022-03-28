import './App.css';

import Dictionary from './components/Dictionary';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Dictionary />
      <Footer />
    </div>
  );
}

export default App;
