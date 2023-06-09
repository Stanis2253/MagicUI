import Home from"./Components/Pages/Home/Home"
import Products from "./Components/Pages/Product/Products"
import Authorization from "./Components/Layout/Authorization/Form"
import Registration from "./Components/Layout/Authorization/Registration"
import Admin from "./Components/Pages/AdminPage/AdminPage"
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Layout/Header/Header";
import Footer from "./Components/Layout/Footer/Footer";

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
            <div>
                <Header/>
                <div className={"block"}>
                    <Routes>
                        <Route path={"/"} element={<Home/>}/>
                        <Route path={"/Product"} element={<Products/>}/>
                        <Route path={"/Admin"} element={<Admin/>}/>
                        <Route path={"/Authorization"} element={<Authorization/>}/>
                        <Route path={"/Registration"} element={<Registration/>}/>
                    </Routes>
                </div>

                <Footer/>
            </div>

  );
}

export default App;
