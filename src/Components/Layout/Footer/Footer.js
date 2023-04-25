import React from 'react';
import styles from './Footer.module.css'
import CardFooter from "../../UI/CardFooter";
import {Container} from "react-bootstrap";

const Footer = (props) => {
    return (
        <React.Fragment>
            <Container>
                    <div >
                        <CardFooter Title={"О нас"}>

                        </CardFooter>
                    </div>
                    <div >
                        <CardFooter Title={"Для клиентов"}>

                        </CardFooter>
                    </div>
                    <div >
                        <CardFooter Title={"Контакты"}>

                        </CardFooter>
                    </div>
            </Container>
        </React.Fragment>
    );
};

export default Footer;