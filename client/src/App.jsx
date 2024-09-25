import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#f4f1f76e] overflow">

      <Navbar />
      <Home />
      <Footer />

    </div>
  );
}

export default App;
