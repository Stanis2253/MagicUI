import React from 'react';
import './Footer.css'
import {Container, Row, Col} from "react-bootstrap";


const Footer = (props) => {
    return (
        <div className={"footer"}>


        <React.Fragment >
            <Container>
                <Row>
                    <Col className={"col-4"}>
                        <h1 className={"title"}>Компания</h1>
                        <p>
                            Компания "ВелоМото" -- это магазин по продаже вело и мото техники.
                            Здесь каждый клиент сможет найти товар, который будет ему по-душе.
                            Наши продавцы помогут вам с выбором и расскажут, как правильно обращаться с инструментом.
                        </p>
                    </Col>
                    <Col>
                        <h1 className={"title"}>Время работы</h1>
                        <p>
                            <Row>
                                <Col>Понедельник</Col><Col>12:00-15:00</Col>
                            </Row>
                            <Row>
                                <Col>Вторник</Col><Col>09:00-15:00</Col>
                            </Row>
                            <Row>
                                <Col>Среда</Col><Col>09:00-15:00</Col>
                            </Row>
                            <Row>
                                <Col>Четверг</Col><Col>09:00-15:00</Col>
                            </Row>
                            <Row>
                                <Col>Пятница</Col><Col>09:00-15:00</Col>
                            </Row>
                            <Row>
                                <Col>Суббота</Col><Col>09:00-15:00</Col>
                            </Row>
                            <Row>
                                <Col>Воскресенье</Col><Col>09:00-15:00</Col>
                            </Row>
                        </p>
                    </Col>
                    <Col>
                        <h1 className={"title"}>Контакты</h1>
                        <p>
                            <Row>
                                <iframe src="https://yandex.ru/sprav/widget/rating-badge/112758141157?type=rating" width="150"
                                        height="50" frameBorder="0"></iframe>
                            </Row>
                        </p>
                    </Col>

                </Row>
            </Container>
        </React.Fragment>
        </div>
    );
};

export default Footer;