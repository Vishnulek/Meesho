import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Viewall from './components/Viewall';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/viewall' element={<Viewall/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
