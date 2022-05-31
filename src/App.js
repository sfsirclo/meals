import logo from './logo.svg';
import './App.css';
import HeaderComponent from './component/HeaderComponent';
import StateComp from './component/StateComp';
import TestUseEffect from './component/TestUseEffect';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Category from './tugas/Category';
import Detail from './tugas/Detail';
import Home from './tugas/Home';
import Navbar from './tugas/Navbar';

function App() {
  return (

      <BrowserRouter>
        <div className='App'>
          <Navbar/>
          <Routes>
            <Route path='/' element={ <Home />} />
            <Route path='category' element={ <Category />} />
            <Route path='/detail/:idMeal' element={ <Detail />} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
