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
            <Navbar  collapseOnSelect expand={"lg"} variant={"dark"}>
                <Container>
                    <Navbar.Brand>
                        <img src={logo} className={"square"}/>
                    </Navbar.Brand>

                        <input className={"input col-7"}/>
                        <Button className={"square buttonHeader"}>
                            <img src={searchBtn} className={"img"}/>
                        </Button>
                        <Button className={"square buttonHeader"}>
                            <img src={cart} className={"img"}/>
                        </Button>
                        <Button className={"square buttonHeader"}>
                            <img src={authoImg} className={"img"}/>
                        </Button>
                </Container>
            </Navbar>
            <Navbar>
                <Container>
                    <Button className={"col-2 buttonNav"}>
                        <span>Главная</span>
                    </Button>
                    <Button className={"col-2 buttonNav"}>
                        <span>Категории</span>
                    </Button>
                    <Button className={"col-2 buttonNav"}>
                        <span>Бренды</span>
                    </Button>
                    <Button className={"col-2 buttonNav"}>
                        <span>Доставка</span>
                    </Button>
                    <Button className={"col-2 buttonNav"}>
                        <span>Самовывоз</span>
                    </Button>
                </Container>

            </Navbar>
        </div>
    )
}
export  default  Header;