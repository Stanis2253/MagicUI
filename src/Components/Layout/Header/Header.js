import logo from "../../Resources/logo.png"
import cart from "../../Resources/shopping-cart-outline-svgrepo-com.svg"
import searchBtn from "../../Resources/search.svg"
import authoImg from "../../Resources/icons8-user-male.svg";
import "./Header.css"
import React from "react"
import {Nav, Navbar, NavLink, Button, Image, Container} from "react-bootstrap";
import {Link} from "react-router-dom";




const Header = (props) => {
    return(
        <div className="header" >
            <Navbar  >
                <Container>

                    <div className={"col-1"}>
                        <Link to={"/Home"}>
                            <Navbar.Brand >
                                <img src={logo} className={"square"}/>
                            </Navbar.Brand>
                        </Link>
                    </div>

                    <input className={"input col-7"}/>

                    <Button className={"square buttonHeader col-1"}>
                        <img src={searchBtn} className={"img"}/>
                    </Button>

                    <Button className={"square buttonHeader col-1"}>
                        <img src={cart} className={"img"}/>
                    </Button>
                    <Link to={"/Authorization"} className={"col-1"}>
                        <Button className={"square w-100 buttonHeader"}>
                            <img src={authoImg} className={"img"}/>
                        </Button>
                    </Link>
                </Container>
            </Navbar>
            <Navbar>
                <Container  className={"navigation"}>
                    <Link to={"/"} className={"col-2"}>
                        <Button className={"buttonNav"}>
                            <span>Главная</span>
                        </Button>
                    </Link>

                    <Link to={"/Product"} className={"col-2"}>
                        <Button className={"buttonNav"}>
                            <span>Товары</span>
                        </Button>
                    </Link>
                    <Link to={"/Point"} className={"col-2"}>
                        <Button className={"buttonNav"}>
                            <span>Самовывоз</span>
                        </Button>
                    </Link>
                    <Link to={"/Delivery"} className={"col-2"}>
                        <Button className={"buttonNav"}>
                            <span>Доставка</span>
                        </Button>
                    </Link>
                    <Link to={"/Admin"} className={"col-2"}>
                        <Button className={"buttonNav"}>
                            <span>Администрирование</span>
                        </Button>
                    </Link>

                </Container>
            </Navbar>
        </div>
    )
}
export  default  Header;