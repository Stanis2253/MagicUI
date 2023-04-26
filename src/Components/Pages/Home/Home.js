import chainsaw from "../../Resources/HomeImg/chainsaw.jpg"
import bicycle from "../../Resources/HomeImg/bicycle.jpg"
import spares from "../../Resources/HomeImg/spares.jpg"
import trimmer from "../../Resources/HomeImg/trimmer.jpg"
import chainsawCard from "../../Resources/HomeImg/chainsawCard.jpg"
import trimmerCard from "../../Resources/HomeImg/trimmerCard.png"
import sparcesCard from "../../Resources/HomeImg/sparesCard.jpg"
import "./Home.css"
import React from 'react';
import {CardGroup, Carousel, Col, Container, Row} from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";

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

                <div className={"category "}>
                    <Row xs={2} md={4} className="g-4">
                        <Col  >
                            <Link to={"/"} className={"d-inline-block col-2 popCategory w-100"}>
                                <Card >
                                    <Card.Img  variant="top" src={chainsawCard} />
                                    <Card.Body>
                                        <Card.Title>Бензопилы</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col>
                            <Link to={"/"} className={"d-inline-block col-2 popCategory w-100"}>
                                <Card >
                                    <Card.Img variant="top" src={trimmerCard} />
                                    <Card.Body>
                                        <Card.Title>Триммеры</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col>
                            <Link to={"/"} className={"d-inline-block col-2 popCategory w-100"}>
                                <Card >
                                    <Card.Img variant="top" src={sparcesCard} />
                                    <Card.Body>
                                        <Card.Title>Запчасти</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>

                    </Row>
                </div>
            </Container>
        </React.Fragment>
    );
};

export default Home;