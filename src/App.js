import { Route, Routes } from 'react-router-dom';
import AdminLogin from './Pages/AdminLogin/AdminLogin';
import './App.css';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GetAdmit from './Pages/GetAdmit/GetAdmit';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/admin' element={<AdminLogin></AdminLogin>}></Route>
          <Route path='/getAdmit' element={<GetAdmit></GetAdmit>}></Route>
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
