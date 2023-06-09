import logo from "../../Resources/logo.png"
import cart from "../../Resources/shopping-cart-outline-svgrepo-com.svg"
import searchBtn from "../../Resources/search.svg"
import authoImg from "../../Resources/icons8-user-male.svg";
import "./Header.css"
import React, {useState} from "react"
import {Nav, Navbar, NavLink, Button, Image, Container, Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import Modal from "../../Modal/MyModal";

const Header = (props) => {

    const [modalActive, setModalActive] = useState(false);
    const [modal2Active, setModal2Active] = useState(false);
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

                    <Button className={"square buttonHeader col-1"}>
                        <img src={cart} className={"img"}/>
                    </Button>
                    <Link onClick={() => setModalActive(true)} className={"col-1"}>
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
                    <div className={"col-10 admin"}>
                        <Link to={"/Admin"} className={"col-2"}>
                            <Button className={"buttonNav"}>
                                <span>Администрирование</span>
                            </Button>
                        </Link>
                    </div>

                </Container>
            </Navbar>
            <Modal active={modalActive} setActive={setModalActive}>
                <Container className={""}>
                    <Col className={"formAuth col-5"}>
                        <Row className={"inputAuth"}>
                            <input
                                type={"email"}

                                placeholder={"Почта"}
                            />
                        </Row>
                        <Row className={"inputAuth"}>
                            <input
                                type={"password"}

                                placeholder={"Пароль"}
                            />
                        </Row>
                        <Row className={"inputAuth"}>
                            <button>
                                Войти
                            </button>
                        </Row>
                        <Link className={"inputAuth"} >
                            <Row className={""}>
                                <button onClick={()=> setModal2Active(true)}>
                                    Регистрация
                                </button>
                                <Modal setActive={setModal2Active} active={modal2Active}>

                                </Modal>
                            </Row>
                        </Link>
                    </Col>
                </Container>
            </Modal>
        </div>
    )
}
export  default  Header;