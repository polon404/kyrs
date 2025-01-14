import React, { Component } from 'react';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';
import hinnn from '../hinn.jpg';


export default class Blog extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <h2 className="text-center mt-5 mb-3"> </h2>
                    <Col md={12}>
                        <Card className="mb-3">
                            <Card.Img variant="top" src="https://furman.top/uploads/posts/2023-11/1699438977_furman-top-p-populyarnie-yaponskie-mashini-oboi-pintere-19.jpg" />
                            <Card.Body>
                                <Card.Text>При посещении автовыставки необходимо придерживаться правил безопасности и не нарушать обстановку.
                                    Запрещается проявлять агрессию и неуважение к другим посетителям и участникам автовыставки.
                                    Нельзя касаться и тем более садиться в автомобили без разрешения их владельцев.
                                    Соблюдайте чистоту и порядок на выставке, не бросайте мусор на территории.
                                    Не перегружайте себя информацией – ограничьте количество автомобилей, которые планируете осмотреть за один раз.
                                    Будьте вежливы и внимательны к сотрудникам автовыставки, следуйте их указаниям.
                                    Уважайте чужое имущество и не трогайте автомобили, если нет такой возможности специально для этого предоставленных.
                                    Соблюдайте расстояние и не мешайте другим посетителям в момент осмотра автомобилей.
                                    При посещении автовыставки с детьми, следите за их поведением и убедитесь, что они следуют правилам поведения.
                                    Помните, что автовыставка – это место, где можно получить массу полезной информации об автомобилях и автомобильной индустрии, поэтому не упустите возможность узнать что-то новое.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}
