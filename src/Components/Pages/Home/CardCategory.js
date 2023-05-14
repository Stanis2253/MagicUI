import React from 'react';
import {Link} from "react-router-dom";
import Card from "react-bootstrap/Card";
import sparcesCard from "../../Resources/HomeImg/sparesCard.jpg";

const CardCategory = (props) => {
    return (
            <Link to={props.Link} className={"d-inline-block col-2 popCategory w-100 text-decoration-none text-reset"}>
                <Card className={"cardCategory"}>
                    <Card.Img className={"category"} variant="top" src={props.Img} />
                    <Card.Body>
                        <Card.Title>{props.Title}</Card.Title>
                    </Card.Body>
                </Card>
            </Link>
    );
};

export default CardCategory;