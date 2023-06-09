import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Button} from "react-bootstrap";
import "./ProductItem.css"
import img from '../../../Resources/HomeImg/chainsawCard.jpg';
const ProductItem = ({props}) => {
    console.log(props);

    return (
        <div className="productItem">
            <Row>
                <Col>
                    <img className={"imageProduct"} src={img}/>
                </Col>
                <Col>
                    <Row>
                        <h5>
                            {props.name}
                        </h5>
                    </Row>
                    <Row>
                        <p>
                            {props.shortDesc}
                        </p>
                    </Row>
                    <Row>
                        <Col>
                            <p>
                                Цена: 10000
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