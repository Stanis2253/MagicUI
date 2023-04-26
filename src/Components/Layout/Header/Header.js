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

                        <Button className={"square buttonHeader col-1"}>
                            <img src={authoImg} className={"img"}/>
                        </Button>


                </Container>
            </Navbar>
            <Navbar>
                <Container className={"navigation"}>
                    <Link to={"/Home"} className={"col-2"}>
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
                    <div className={"col-2"}>

                    </div>
                </Container>
                {/*<Container className={"navigation"} >*/}
                {/*    <Nav variant="tabs" defaultActiveKey="/home" >*/}
                {/*        <Nav.Item className={"col-3"}>*/}
                {/*            <Nav.Link href="/Home">*/}
                {/*                Главная*/}
                {/*            </Nav.Link>*/}
                {/*        </Nav.Item>*/}
                {/*        <Nav.Item className={"col-3"}>*/}
                {/*            <Nav.Link href="/Product">*/}
                {/*                Товар*/}
                {/*            </Nav.Link>*/}
                {/*        </Nav.Item>*/}
                {/*        <Nav.Item className={"col-3"}>*/}
                {/*            <Nav.Link  href="/Home">*/}
                {/*                Доставка*/}
                {/*            </Nav.Link>*/}
                {/*        </Nav.Item>*/}
                {/*        <Nav.Item className={"col-3"}>*/}
                {/*            <Nav.Link  href="/Home">*/}
                {/*                Самовывоз*/}
                {/*            </Nav.Link>*/}
                {/*        </Nav.Item>*/}
                {/*    </Nav>*/}
                {/*</Container>*/}


            </Navbar>
        </div>
    )
}
export  default  Header;