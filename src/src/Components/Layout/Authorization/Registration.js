import React, {useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";

const Registration = (handleClick) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Container className={""}>
            <Col className={"formAuth col-5"}>
                <Row>
                    <h1>
                        Регистрация
                    </h1>
                </Row>
                <Row className={"inputAuth"}>
                    <input
                        type={"email"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={"Фамилия"}
                    />
                </Row>
                <Row className={"inputAuth"}>
                    <input
                        type={"email"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={"Имя"}
                    />
                </Row>
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
                        Готово
                    </button>
                </Row>
            </Col>
        </Container>
    );
};

export default Registration;