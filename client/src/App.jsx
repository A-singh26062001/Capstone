import HomeLogin from './HomeLogin'
import Signup from './Signup';
import Login from './Login'; 
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LocationSelector from './LocationSelector';
import './App.css';
import './CosOuter.css'
import CosCycleBooking from './CosCycleBooking';
import BookingPage from './booking';
import FinishRide from './finishride';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path='/register' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/homeLogin' element={<HomeLogin />} />
        <Route path={`/Location`} element={<div className="app"><LocationSelector /></div>} />
        <Route path={`/CosCycleBooking`} element={<div className="cosOuter"><CosCycleBooking /></div>} />
        <Route path="/booking/:cycleNumber" element={<BookingPage />} />
        <Route path="/finishride/:timeTaken" element={<FinishRide />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

