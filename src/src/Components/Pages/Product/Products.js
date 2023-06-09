import React, {useEffect, useState} from 'react';
import './Product.css';
import {Button, Col, Container, Row} from "react-bootstrap";
import {Pagination} from "../../Pagination/Pagination";
import {ProductsList} from "./ProductList/ProductList";
import searchBtn from "../../Resources/search.svg";


const Products = () => {
    const sortOptions =[
        {
            title: "Названию",
            value: "title"
        },
        {
            title: "Цене",
            value: "price"
        },
        {
            title: "Категории",
            value: "category"
        },
    ]

    const [products, setProducts] = useState([]);

    useEffect(fetchProductsHandler, [])
    console.log(products);
    function fetchProductsHandler() {
        fetch('https://localhost:7047/api/Products/GetAll').then(respons=>{
            return respons.json();
        }).then(data=>{
            setProducts(data)
        });
    }
    function fetchImageHandler() {
        fetch('https://localhost:7047/api/Image/GetAll').then(respons=>{
            return respons.json();
        }).then(data=>{
            setProducts(data)
        });
    }

    return (
        <React.Fragment>
            <Container>
                <Row>
                    <input className={"input col-11"}/>

                    <Button className={"btn-search col"}>
                        <img src={searchBtn} className={"img"}/>
                    </Button>
                    <select
                        className="myselect"
                    >
                        <option>Сортировка</option>
                        {sortOptions.map((item, index) => (
                            <option value={item.value} key={index}>
                                {item.title}
                            </option>
                        ))}
                    </select>
                </Row>
                <Row>
                    <Col>
                        <Pagination itemsPerPage={9} data={products}/>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>

    );
};

export default Products;