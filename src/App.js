import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Discover from './pages/Discover'
import TravelStories from './pages/TravelStories'
import Contact from './pages/ContactUs'

function App() {
  return (
    <Router> 
      <Navbar /> 
      <Routes>
        <Route path='/' element={<Discover />} />
        <Route path='/travelStories' element={<TravelStories />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router> 
  );
}

 

export default App;
