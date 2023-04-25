import Home from"./Components/Pages/Home/Home"
import Category from"./Components/Pages/Category/Category"
import Manufacturer from"./Components/Pages/Manufacturer/Manufacturer"
import Point from"./Components/Pages/Point/Point"
import Delivery from"./Components/Pages/Delivery/Delivery"

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Layout/Header/Header";
import Footer from "./Components/Layout/Footer/Footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
            <div>
                <Header/>
                        <Routes>
                            <Route path={"/Home"} element={<Home/>}/>
                            <Route path={"/Category"} element={<Category/>}/>
                            <Route path={"/Delivery"} element={<Delivery/>}/>
                            <Route path={"/Manufacturer"} element={<Manufacturer/>}/>
                            <Route path={"/Point"} element={<Point/>}/>
                        </Routes>
                <Footer/>
            </div>

  );
}

export default App;
