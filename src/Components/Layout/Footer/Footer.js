import React from 'react';
import './Footer.css'
import {Container, Row, Col} from "react-bootstrap";


const Footer = (props) => {
    return (
        <React.Fragment>
            <Container className={"footer"}>
                <Row>
                    <Col className={"col-4"}>
                        <h1 className={"title"}>Компания</h1>
                    </Col>
                    <Col>
                        <h1 className={"title"}>Для клиентов</h1>
                    </Col>
                    <Col>
                        <h1 className={"title"}>Контакты</h1>
                    </Col>

                </Row>
            </Container>
        </React.Fragment>
    );
};

export default Footer;