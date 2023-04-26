import Home from"./Components/Pages/Home/Home"
import Products from "./Components/Pages/Product/Products"
import Point from"./Components/Pages/Point/Point"
import Delivery from"./Components/Pages/Delivery/Delivery"
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Layout/Header/Header";
import Footer from "./Components/Layout/Footer/Footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
            <div>
                <Header/>
                <div className={"block"}>
                    <Routes>
                        <Route path={"/Home"} element={<Home/>}/>
                        <Route path={"/Product"} element={<Products/>}/>
                        <Route path={"/Delivery"} element={<Delivery/>}/>
                        <Route path={"/Point"} element={<Point/>}/>
                    </Routes>
                </div>

                <Footer/>
            </div>

  );
}

export default App;
