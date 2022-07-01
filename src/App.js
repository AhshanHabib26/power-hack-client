
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Register/Login/Login';
import Signup from './Components/Register/Signup/Signup';
import { ToastContainer } from 'react-toastify';
import Dashboard from './Components/Dashboard/Dashboard';
import UpdateItems from './Components/Dashboard/UpdateItems';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='dashboard/:id' element={<UpdateItems/>}/>

      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
