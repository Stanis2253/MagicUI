import React from 'react';
import ProductList from "./ProductList/ProductList";
import {Col, Container, Row} from "react-bootstrap";

const Products = () => {
    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col >
                        <ProductList/>
                    </Col>
                    <Col className={"col-2"}>

                    </Col>

                </Row>
            </Container>
        </React.Fragment>
    );
};

export default Products;