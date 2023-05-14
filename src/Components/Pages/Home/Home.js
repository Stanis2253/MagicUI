import chainsaw from "../../Resources/HomeImg/chainsaw.jpg"
import bicycle from "../../Resources/HomeImg/bicycle.jpg"
import spares from "../../Resources/HomeImg/spares.jpg"
import trimmer from "../../Resources/HomeImg/trimmer.jpg"
import bicyclesCard from "../../Resources/HomeImg/bicyclesCard.jpg"
import chainsawCard from "../../Resources/HomeImg/chainsawCard.jpg"
import trimmerCard from "../../Resources/HomeImg/trimmerCard.png"
import sparcesCard from "../../Resources/HomeImg/sparesCard.jpg"
import "./Home.css"
import React from 'react';
import {CardGroup, Carousel, Col, Container, Row} from "react-bootstrap";
import CardCategory from "./CardCategory";

const Home = () => {
    return (
        <React.Fragment>
            <Carousel className={"carousel"}>
                <Carousel.Item>
                    <img className={"d-block w-100 img"}
                    src={spares}
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className={"d-block w-100 img"}
                         src={trimmer}
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className={"d-block w-100 img"}
                         src={chainsaw}
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className={"d-block w-100 img"}
                         src={bicycle}
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
            <Container>
                <h1 >
                    Популярные категории
                </h1>
                <br/>

                <div >
                    <Row xs={2} md={4} className="g-4">
                        <Col  >
                            <CardCategory Link={"/"} Title={"Бензопилы"} Img={chainsawCard}></CardCategory>
                        </Col>
                        <Col>
                            <CardCategory Link={"/"} Title={"Триммеры"} Img={trimmerCard}></CardCategory>
                        </Col>
                        <Col>
                            <CardCategory Link={"/"} Title={"Запчасти"} Img={sparcesCard}></CardCategory>
                        </Col>
                        <Col>
                            <CardCategory Link={"/"} Title={"Велосипеды"} Img={bicyclesCard}></CardCategory>
                        </Col>

                    </Row>
                </div>
            </Container>
        </React.Fragment>
    );
};

export default Home;