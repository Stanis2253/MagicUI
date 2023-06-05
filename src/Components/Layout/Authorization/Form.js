import React, {useState}  from 'react';
import {Col, Row, Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./Form.css"

const Form = ({title, handleClick}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Container className={""}>
             <Col className={"formAuth col-5"}>

                <Row className={"inputAuth"}>
                    <input
                        type={"email"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={"Почта"}
                    />
                </Row>
                <Row className={"inputAuth"}>
                    <input
                        type={"password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder={"Пароль"}
                    />
                </Row>
                 <Row className={"inputAuth"}>
                     <button onClick={handleClick}>
                         Войти
                     </button>
                 </Row>
                 <Link className={"inputAuth"} to={"/Registration"}>
                     <Row className={""}>
                         <button onClick={handleClick}>
                             Регистрация
                         </button>
                     </Row>
                 </Link>
            </Col>
        </Container>
    );
};

export default Form;