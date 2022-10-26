import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/home/Home';
import Gym from './components/menu/Gym';
import Navigation from './components/Navigation';
import Trainer from './components/menu/Trainer';
import Calculator from './components/menu/Calculator';
import Information from './components/menu/Information';
import Board from './components/menu/Board';
import Shop from './components/menu/Shop';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
      <div className="whole-wrapper">
        <Header />
        <Navigation />
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gym" element={<Gym />} />
          <Route path="/trainer" element={<Trainer />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/information" element={<Information />} />
          <Route path="/board" element={<Board />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <hr />
        <Footer />
      </div>
    </div>
  );
}

export default App;
