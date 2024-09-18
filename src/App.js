import { Route, Routes } from 'react-router';
import './App.css';
import Login from './components/login/Login';
import RequireUser from './components/RequireUser';
import Signup from './components/signup/Signup';
import Home from './components/home/Home';
import Dashobard from './components/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
        
     <Routes>
        <Route element={<RequireUser />}>
            <Route element={<Home />}>
                <Route path="/" element={<Dashobard />} />
            </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
    </Routes>
    </div>
  );
}

export default App;
