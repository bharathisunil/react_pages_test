import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Redirect, Route, Routes } from "react-router-dom";
import Tehran_Navbar from './Tehran_Navbar';
import Banner from './components/banner';
import Tehran_Contact from './Tehran_Contact';
import Home from './Pages/Home';
import { Container, Row, Col } from "react-bootstrap";
import Welcome from './Pages/Welcome';
import Flavors from './Pages/Flavors';
import HappyHour from './Pages/HappyHour';
import HookahGalary from './Pages/HookahGalary';

function App() {
  return (
    <div className="App">
      <Tehran_Navbar/>
      <Home/>
      <Welcome/>
      {/* <Flavors/> */}
      <HappyHour/>
      <HookahGalary/>
      <Tehran_Contact/>
    </div>
  );
}

export default App;
