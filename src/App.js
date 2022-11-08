import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './container/Home';
import RestaurantPage from './container/RestaurantPage';
import Footer from './components/Footer';
import CheckOut from './container/CheckOut';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="CheckOut" element={<CheckOut />} />
        <Route path="RestaurantPage" element={<RestaurantPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
