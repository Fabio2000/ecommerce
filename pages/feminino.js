import styles from '../style/styles.module.css'
import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'react-bootstrap/Carousel';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Nav, Col, Card, Row, CardText, Container } from 'reactstrap';
import Image from 'next/image'
import cearense from '../public/imagens/cearense.png';
import person from '../public/imagens/person.png';
import promo from '../public/imagens/promocao.png'
import inaugura from '../public/imagens/inaugura.jpeg'


// Fotos
import femOne from '../public/imagens/feminina/amarelo.png'
import femTwo from '../public/imagens/feminina/laranja.png'
import femTree from '../public/imagens/feminina/preto.png'

import shortsUm from '../public/imagens/feminina/escuro.png'
import shortsTwo from '../public/imagens/feminina/pretoj.png'
import shortsTree from '../public/imagens/feminina/jeans.png'

import jeansOne from '../public/imagens/feminina/unisexUm.jpg'
import jeansTwo from '../public/imagens/feminina/unisexDois.png'
import jeansTree from '../public/imagens/feminina/unisexTres.png'





import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import fem from '../public/imagens/feminina/fem.png'

import femin2 from '../public/imagens/fTiringa.png'


export default function () {
    const [dropdownOpen, setDropdownOpen] = React.useState(false);

    const [umShow, setumShow] = useState(false);
    const [doisShow, setdoisShow] = useState(false);
    const [tresShow, settresShow] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <Col className={styles.teste}>
            <Nav className="navbar navbar-expand navbar-dark bg-dark col-12">
                <div id="informa" className={styles.informa}>
                    <div>
                        <a className="navbar-brand" href="/"><Image src={cearense} width={60} height={60} /></a>
                    </div>
                    <Col className="collapse navbar-collapse">
                        <Container className='col-12'>
                            <Col className="">
                                <ul class="navbar-nav mr-auto">
                                    <li class="nav-item">
                                        <a class="nav-link" href="/">Pagina inicial</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/produtos">Produtos</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/criadores">Criadores</a>
                                    </li>
                                    
                                    <li class="nav-item">
                                        <a class="nav-link" href="/json">JSON</a>
                                    </li>
                                </ul>
                            </Col>
                        </Container>
                    </Col>
                </div>
                <Col style={{ textAlign: 'end' }}>
                    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle style={{ backgroundColor: 'transparent', borderColor: 'transparent' }} ><Image src={person} width={50} height={50} /></DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem href='/login'>Login</DropdownItem>
                            <DropdownItem href='/perfil'>Perfil</DropdownItem>
                            <DropdownItem href='/carinho'>Carinho</DropdownItem>
                            <DropdownItem href='/historico'>Histórico</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </Col>
            </Nav>
            <br />
            <br />
            <Carousel fade className={styles.corousel} style={{ textAlignLast: 'center', marginBottom: '100px' }}>
                <Carousel.Item interval={2000}>
                    <Image
                        src={fem}
                        width={990}
                        height={250}
                        className="d-block w-100"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <Image
                        src={promo}
                        width={990}
                        height={250}
                        className="d-block w-100"
                        alt="Two slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <Image
                        src={inaugura}
                        width={990}
                        height={250}
                        className="d-block w-100"
                        alt="First slide"
                    />
                </Carousel.Item>
            </Carousel>
            <div class="row" style={{ justifyContent: 'center', paddingTop: '1px', paddingBottom: '20px' }} className={styles.cards}>

                <Col sm="3">
                    <Card body style={{ height: '650px' }}>
                        <Image src={femOne} height={650} />
                        <br />
                        <h4>Short tactel feminino curtíssimo liso várias cores</h4>
                        <CardText>SHORT TACTEL FEMININO Tecido - TACTEL Composição - 100%POLIÉSTER Tamanhos - P, M e G Produtos novos e embalados individualmente, etiquetas internas e externas. Tempo de postagem de até 24 horas em dia útil.</CardText>
                        <Button class="btn btn-warning" style={{ marginTop: 'auto' }} onClick={() => setumShow(true)}>R$ 29,99</Button>
                    </Card>
                </Col>

                <Col sm="3">
                    <Card body style={{ height: '650px' }}>
                        <Image src={femin2} height={650} />
                        <br />
                        <h4>SHORTS HERING JEANS CINTURA ALTA AZUL MÉDIO</h4>
                        <CardText>Looks leves, versáteis e que combinam perfeitamente tanto com um passeio casual no final de semana quanto com uma produção de expert para odia a dia. Essencial!</CardText>
                        <Button class="btn btn-warning" onClick={() => setdoisShow(true)} style={{ marginTop: 'auto' }}>R$ 39,90</Button>
                    </Card>
                </Col>

                <Col sm="3">
                    <Card body style={{ height: '650px' }}>
                        <Image src={jeansTwo} height={799} />
                        <br />
                        <h4>Camiseta oficial tiringa</h4>
                        <br />
                        <CardText>Camiseta oficial tiringa, 100% algodão.</CardText>
                        <Button class="btn btn-warning" onClick={() => settresShow(true)} style={{ marginTop: 'auto' }}>R$39,90</Button>
                    </Card>
                </Col>
            </div>

            <Modal
                size="lg"
                show={umShow}
                onHide={() => setumShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm" style={{ marginLeft: 'auto' }}>
                        Short tactel feminino curtíssimo liso várias cores
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col>
                                <div>
                                    <Carousel fade className={styles.modalCel}>
                                        <Carousel.Item style={{ textAlign: `-webkit-center` }} interval={2000}>
                                            <Image className="d-block w-100"
                                                width={520}
                                                height={380}
                                                src={femOne}
                                                alt="First slide" />
                                            <h5>SHORT TACTEL FEMININO Tecido - TACTEL Composição - <br />
                                                100%POLIÉSTER.</h5>
                                        </Carousel.Item >
                                        <Carousel.Item interval={2000} style={{ textAlign: `-webkit-center` }}>
                                            <Image className="d-block w-100"
                                                width={520}
                                                height={380}
                                                src={femTwo}
                                                alt="First slide" />
                                            <h5>SHORT TACTEL FEMININO Tecido - TACTEL Composição - <br />
                                                100%POLIÉSTER.</h5>
                                        </Carousel.Item>
                                        <Carousel.Item interval={2000} style={{ textAlign: `-webkit-center` }}>
                                            <Image className="d-block w-100"
                                                src={femTree}
                                                alt="First slide"
                                                width={520}
                                                height={380}
                                            />
                                            <h5>SHORT TACTEL FEMININO Tecido - TACTEL Composição - <br />
                                                100%POLIÉSTER.</h5>
                                        </Carousel.Item>
                                    </Carousel>
                                    <Col sm="12" style={{ textAlign: '-webkit-center' }}>
                                        <Col body>
                                            <Button class="btn btn-warning" href='/carinho'>R$ 29,90</Button>
                                        </Col>
                                    </Col>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
            <Modal
                size="lg"
                show={doisShow}
                onHide={() => setdoisShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg" style={{ marginLeft: 'auto' }}>
                        SHORTS HERING JEANS CINTURA ALTA AZUL MÉDIO
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col>
                                <div>
                                    <Carousel fade className={styles.modalCel}>
                                        <Carousel.Item style={{ textAlign: `-webkit-center` }} interval={2000}>
                                            <Image className="d-block w-100"
                                                width={420}
                                                height={380}
                                                src={shortsUm}
                                                alt="First slide" />
                                            <h5>Conta ainda com bolsos funcionais,
                                                passantes na cintura e barras tradicionais. <br />
                                                O Shorts jeans de algodão com elastano tem modelagem ajustada com cintura alta!</h5>
                                        </Carousel.Item >
                                        <Carousel.Item interval={2000} style={{ textAlign: `-webkit-center` }}>
                                            <Image className="d-block w-100"
                                                src={shortsTwo}
                                                alt="First slide"
                                                width={420}
                                                height={380} />
                                            <h5>Conta ainda com bolsos funcionais,
                                                passantes na cintura e barras tradicionais. <br />
                                                O Shorts jeans de algodão com elastano tem modelagem ajustada com cintura alta!</h5>
                                        </Carousel.Item>
                                        <Carousel.Item interval={2000} style={{ textAlign: `-webkit-center` }}>
                                            <Image className="d-block w-100"
                                                src={shortsTree}
                                                alt="First slide"
                                                width={420}
                                                height={380}
                                            /><h5>Conta ainda com bolsos funcionais,
                                                passantes na cintura e barras tradicionais. <br />
                                                O Shorts jeans de algodão com elastano tem modelagem ajustada com cintura alta!</h5>
                                        </Carousel.Item>
                                    </Carousel>
                                    <Col sm="12" style={{ textAlign: '-webkit-center' }}>
                                        <Col body>
                                            <Button class="btn btn-warning" href='/carinho'>R$ 59,90</Button>
                                        </Col>
                                    </Col>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
            <Modal
                size="lg"
                show={tresShow}
                onHide={() => settresShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg" style={{ marginTop: 'auto' }}>
                        Camiseta unisex Oficial
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col>
                                <div>
                                    <Carousel fade className={styles.modalCel}>
                                        <Carousel.Item style={{ textAlign: `-webkit-center` }} interval={2000}>
                                            <Image className="d-block w-100"
                                                src={jeansOne}
                                                alt="First slide"
                                                width={420}
                                                height={380} />
                                            <h5>Camiseta oficial tiringa, 100% algodão. diferentes tamanhos e cores</h5>
                                        </Carousel.Item >
                                        <Carousel.Item interval={2000} style={{ textAlign: `-webkit-center` }}>
                                            <Image className="d-block w-100"
                                                src={jeansTwo}
                                                alt="First slide"
                                                width={420}
                                                height={380} />
                                            <h5>Camiseta oficial tiringa, 100% algodão. diferentes tamanhos e cores</h5>
                                        </Carousel.Item>
                                        <Carousel.Item interval={2000} style={{ textAlign: `-webkit-center` }}>
                                            <Image className="d-block w-100"
                                                src={jeansTree}
                                                alt="First slide"
                                                width={420}
                                                height={380}
                                            />
                                            <h5>Camiseta oficial tiringa, 100% algodão. diferentes tamanhos e cores</h5>
                                        </Carousel.Item>
                                    </Carousel>
                                    <Col sm="12" style={{ textAlign: '-webkit-center' }}>
                                        <Col body>
                                            <Button class="btn btn-warning" href='/carinho'>R$ 49,99</Button>
                                        </Col>
                                    </Col>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>

            <footer className={styles.footer}>
                <p>©Copyright 2022 by Tiringa <a href='/criadores'>Group</a>.  All rights reversed.</p>
            </footer>
        </Col>
    )
}
