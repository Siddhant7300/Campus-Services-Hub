import { Route, Routes } from 'react-router';
import './App.css';
import Login from './components/login/Login';
import RequireUser from './components/RequireUser';
import Signup from './components/signup/Signup';
import Home from './components/home/Home';
import Dashobard from './components/dashboard/Dashboard';
import Room from './components/room/Room';
import Wifi from './components/wifi/Wifi';
import Bike from './components/bike/Bike';
import Health from './components/health/Health';
import Laundary from './components/laundary/Laundary';
import HealthContact from './components/healthContact/HealthContact';
import AdminDashboard from './admin/AdminDashboard';

function App() {
  return (
    <div className="App">
     <Routes>
        <Route element={<RequireUser />}>
            <Route element={<Home />}>
                <Route path="/" element={<Dashobard />} />
                <Route path="/room" element={<Room />} />
                <Route path="/wifi" element={<Wifi />} />
                <Route path="/bike" element={<Bike />} />
                <Route path="/health" element={<Health />} />
                <Route path="/laundary" element={<Laundary />} />
                <Route path="/health-contact" element={<HealthContact />} />
            </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
    </div>
  );
}

export default App;
