import logo from './logo.svg';
// import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import SingnUp from './Pages/Login/SingnUp';
import RequireAuth from './Pages/Login/RequireAuth';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/DashBoard/Dashboard';
import MyAppointments from './Pages/DashBoard/MyAppointments';
import MyReview from './Pages/DashBoard/MyReview';
import MyHistory from './Pages/DashBoard/MyHistory';
import Users from './Pages/DashBoard/Users';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signUp' element={<SingnUp></SingnUp>}></Route>
        <Route path='/about' element={<About></About>}></Route>

        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment></Appointment>
          </RequireAuth>
        }></Route>

        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path='review' element={<MyReview></MyReview>}></Route>
          <Route path='history' element={<MyHistory></MyHistory>}></Route>
          <Route path='users' element={<Users></Users>}></Route>
        </Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
