import { Route, Routes } from "react-router-dom";
import Home from "./componant/Home";
import NavBar from "./componant/NavBar";
import Inventory from "./componant/Inventory";
import Financing from "./componant/Financing";
import About from "./componant/About";
import Contact from "./componant/Contact";

export default function App() {
  
  return (<>  <NavBar/>
  <Routes>
   
    <Route path="/" element={<Home/>}></Route>
    <Route path="/INVENTORY" element={<Inventory/>}></Route>
    <Route path="/FINANCING" element={<Financing/>}></Route>
    <Route path="/ABOUTUS" element={<About/>}></Route>
    <Route path="/CONTACT" element={<Contact/>}></Route>
  
  </Routes>
</> );
}

