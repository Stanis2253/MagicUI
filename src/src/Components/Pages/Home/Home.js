import chainsaw from "../../Resources/HomeImg/chainsaw.jpg"
import bicycle from "../../Resources/HomeImg/bicycle.jpg"
import spares from "../../Resources/HomeImg/spares.jpg"
import trimmer from "../../Resources/HomeImg/trimmer.jpg"
import bicyclesCard from "../../Resources/HomeImg/bicyclesCard.jpg"
import chainsawCard from "../../Resources/HomeImg/chainsawCard.jpg"
import trimmerCard from "../../Resources/HomeImg/trimmerCard.png"
import sparcesCard from "../../Resources/HomeImg/sparesCard.jpg"
import "./Home.css"
import React from 'react';
import {CardGroup, Carousel, Col, Container, Row} from "react-bootstrap";
import CardCategory from "./CardCategory";

const Home = () => {
    return (
        <React.Fragment>
            <Carousel controls={false} className={"carousel"}>
                <Carousel.Item>
                    <img className={"d-block w-100 img"}
                    src={spares}
                    />
                    <Carousel.Caption>
                        <h3>Мощь и эффективность для вашей работы!</h3>
                        <p>Высокая производительность для больших результатов</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className={"d-block w-100 img"}
                         src={chainsaw}
                    />
                    <Carousel.Caption>
                        <h3>Качественная мототехника</h3>
                        <p>Сочетает в себе надежность и высокую производительность</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className={"d-block w-100 img"}
                         src={bicycle}
                    />
                    <Carousel.Caption>
                        <h3>Завоевывайте дорогу с нами!</h3>
                        <p>Позволяет вам воплотить свои мото-мечты в реальность</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
            <Container>
                <div>
                    <Row xs={2} md={4} className="g-4">
                        <Col md={6} style={{fontSize:18}}>
                            Мы специализируемся на продаже мотоциклов и бензопил, предоставляя нашим клиентам широкий ассортимент техники для различных нужд.

                            Когда вы переступаете порог нашего магазина, вас окружает атмосфера энтузиазма и приключений. Наше внимание к деталям и высокое качество товаров гарантируют, что вы найдете идеальный мотоцикл или бензопилу, отвечающие вашим требованиям и желаниям.

                            Наша команда продавцов - профессионалы, которые разделяют вашу страсть к движению и смекалку. Они готовы помочь вам с выбором и предоставить экспертные рекомендации, чтобы вы сделали правильное решение. Независимо от того, являетесь ли вы опытным мотоциклистом или новичком, мы обеспечим вас необходимыми знаниями и инструментами для обращения с техникой.

                            Мы гордимся тем, что предлагаем только надежные и высококачественные мотоциклы и бензопилы от ведущих производителей. Ваша безопасность и удовлетворение - наша первостепенная задача. Мы стремимся к тому, чтобы каждый клиент ощущал уверенность в своем выборе и полную поддержку со стороны нашей команды.
                        </Col>
                        <Col>
                            <img height="500" width="700" src={require('../../Resources/img/bezopila.jpg')} alt=""/>
                        </Col>
                    </Row>
                </div>
                <h1 className="mt-5">
                    Популярные категории
                </h1>
                <br/>
                <div >
                    <Row xs={2} md={4} className="g-4">
                        <Col  >
                            <CardCategory Link={"/"} Title={"Бензопилы"} Img={chainsawCard}></CardCategory>
                        </Col>
                        <Col>
                            <CardCategory Link={"/"} Title={"Триммеры"} Img={trimmerCard}></CardCategory>
                        </Col>
                        <Col>
                            <CardCategory Link={"/"} Title={"Запчасти"} Img={sparcesCard}></CardCategory>
                        </Col>
                        <Col>
                            <CardCategory Link={"/"} Title={"Велосипеды"} Img={bicyclesCard}></CardCategory>
                        </Col>

                    </Row>
                </div>
                <h1 className="mt-5">
                    Самовывоз товара
                </h1>
                <br/>
                <div className="mt-5">
                    <Row xs={2} md={4} className="g-4">
                        <Col md={7}>
                            Магазин находится в самом центре станицы Динской, приветствуя всех мотоциклистов и лесорубов из этого прекрасного сообщества. Мы гордимся тем, что являемся сердцем местной мотоциклетной и лесозаготовительной культуры. Наше расположение в таком центральном месте делает нас доступными и удобными для всех жителей и гостей станицы.
                            <br/>Наш магазин - центр мотоциклистической и лесозаготовительной культуры этого места. Мы готовы поддержать и вдохновить вас на новые достижения и приключения. Приходите в наш магазин, и вы почувствуете волнение, связанное с выбором нового мотоцикла или инструмента, который будет сопровождать вас в ваших приключениях и рабочих проектах.
                        </Col>
                        <Col>
                            <iframe src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=112758141157" width="560"
                                    height="400" frameBorder="0"></iframe>
                        </Col>
                    </Row>
                </div>
                <h1 className="mt-5">
                    Система доставки
                </h1>
                <br/>
                <div className="mt-5">
                    <Row xs={2} md={8} className="g-4">
                        <Col md={6}>
                            <img width="600" src={require('../../Resources/img/dostav.jpg')} alt=""/>
                        </Col>
                        <Col md={6}>
                            Рады предложить нашим клиентам удобную услугу доставки товаров прямо до вашего дома или работы. <br/>
                            Процесс доставки с нами прост и удобен. Выберите необходимые товары в нашем магазине, согласуйте детали заказа с нашей командой продавцов, включая адрес доставки и удобное время. Мы организуем доставку надежными и профессиональными службами, чтобы ваши товары были доставлены в сохранности и в указанные сроки. <br/>
                            Независимо от того, нужен вам новый мотоцикл или бензопила для работы, мы постараемся сделать процесс доставки максимально удобным и безопасным для вас. Мы ценим ваше доверие и стремимся обеспечить высокий уровень обслуживания на каждом этапе сотрудничества. <br/>
                        </Col>
                    </Row>
                </div>


            </Container>
        </React.Fragment>
    );
};

export default Home;