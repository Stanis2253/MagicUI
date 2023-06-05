import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

const Point = () => {
    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col>
                        <iframe src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=112758141157" width="560"
                                height="400" frameBorder="0"></iframe>
                    </Col>
                    <Col>

                    </Col>
                </Row>

            </Container>
        </React.Fragment>
    );
};

export default Point;