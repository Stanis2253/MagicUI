import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Button} from "react-bootstrap";

const ProductItem = (props) => {
    return (
        <div>
            <Row>
                <Col >
                    <img className={"imageProduct"} src={props.Path}/>
                </Col>
                <Col>
                    <Row>
                        <h5>
                            {props.Category + " " + props.Manufacturer+ " " + props.ProductName}
                        </h5>
                    </Row>
                    <Row>
                        <p>
                            {props.ShortDes}
                        </p>
                    </Row>
                    <Row>
                        <Col>
                            <p>
                                Цена:
                            </p>
                        </Col>
                        <Col>
                            <p>
                                {props.Price}
                            </p>
                        </Col>
                        <Col>
                            <Button>
                                Добавить в корзину
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </div>
    );
};

export default ProductItem;