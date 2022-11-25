import styles from '../style/styles.module.css'
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Nav, Row, Col, Container} from 'reactstrap';
import Image from 'next/image'
import cearense from '../public/imagens/cearense.png';
import person from '../public/imagens/person.png';
import Card from 'react-bootstrap/Card';

export default function () {
    const [dropdownOpen, setDropdownOpen] = React.useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <div className={styles.body}>
            <Nav className="navbar navbar-expand navbar-dark bg-dark col-12" style={{ marginBottom: '50px' }}>
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
            <Container>
                <Row>
                    <Col>
                        <Card style={{ marginBottom: '50px' }}>
                            <Card.Header as="h5" style={{ textAlign: 'center' }}>Pedido #00001</Card.Header>
                            <Card.Body>
                                <Card.Title>Item Roupa #Item01</Card.Title>
                                <br />
                                <Container>
                                    <Row>
                                        <Col style={{ display: 'flex' }}>
                                            <Image src={cearense}
                                                width={280}
                                                height={200}
                                            ></Image>
                                            <Col style={{ display: 'flex' }}>
                                                <h4 style={{ marginLeft: '20px', marginRight: '20px' }}>Preço: </h4><h6> ####</h6>
                                                <h4 style={{ marginLeft: '20px', marginRight: '20px' }}>Tamanho: </h4><h6> ####</h6>
                                                <h4 style={{ marginLeft: '20px', marginRight: '20px' }}>Cor: </h4><h6> ####</h6><br />

                                            </Col>
                                            <Card border="light" style={{ width: '18rem' }}>
                                                <Card.Header>Descrição do Item/Pedio</Card.Header>
                                                <Card.Body>
                                                    <Card.Title>Item Roupa #Item01</Card.Title>
                                                    <Card.Text>
                                                        Descrição da roupa #Item01, informação vinda do banco.
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card.Body>
                        </Card>
                        <Card style={{ marginBottom: '50px' }}>
                            <Card.Header as="h5" style={{ textAlign: 'center' }}>Pedido #00002</Card.Header>
                            <Card.Body>
                                <Card.Title>Item Roupa #Item02</Card.Title>
                                <br />
                                <Container>
                                    <Row>
                                        <Col style={{ display: 'flex' }}>
                                            <Image src={cearense}
                                                width={280}
                                                height={200}
                                            ></Image>
                                            <Col style={{ display: 'flex' }}>
                                                <h4 style={{ marginLeft: '20px', marginRight: '20px' }}>Preço: </h4><h6> ####</h6>
                                                <h4 style={{ marginLeft: '20px', marginRight: '20px' }}>Tamanho: </h4><h6> ####</h6>
                                                <h4 style={{ marginLeft: '20px', marginRight: '20px' }}>Cor: </h4><h6> ####</h6>
                                            </Col>
                                        </Col>
                                        <Card border="light" style={{ width: '18rem' }}>
                                            <Card.Header>Descrição do Item/Pedio</Card.Header>
                                            <Card.Body>
                                                <Card.Title>Item Roupa #Item02</Card.Title>
                                                <Card.Text>
                                                    Descrição da roupa #Item02, informação vinda do banco.
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Row>
                                </Container>
                            </Card.Body>
                        </Card>
                        <Card style={{ marginBottom: '50px' }}>
                            <Card.Header as="h5" style={{ textAlign: 'center' }}>Pedido #00003</Card.Header>
                            <Card.Body>
                                <Card.Title>Item Roupa #Item03</Card.Title>
                                <br />
                                <Container>
                                    <Row>
                                        <Col style={{ display: 'flex' }}>
                                            <Image src={cearense}
                                                width={280}
                                                height={200}
                                            ></Image>
                                            <Col style={{ display: 'flex' }}>
                                                <h4 style={{ marginLeft: '20px', marginRight: '20px' }}>Preço: </h4><h6> ####</h6>
                                                <h4 style={{ marginLeft: '20px', marginRight: '20px' }}>Tamanho: </h4><h6> ####</h6>
                                                <h4 style={{ marginLeft: '20px', marginRight: '20px' }}>Cor: </h4><h6> ####</h6>
                                            </Col>
                                            <Card border="light" style={{ width: '18rem' }}>
                                                <Card.Header>Descrição do Item/Pedio</Card.Header>
                                                <Card.Body>
                                                    <Card.Title>Item Roupa #Item03</Card.Title>
                                                    <Card.Text>
                                                        Descrição da roupa #Item03, informação vinda do banco.
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <footer className={styles.footer}>
                <p>©Copyright 2022 by Tiringa <a href='/criadores'>Group</a>.  All rights reversed.</p>
            </footer>
        </div>
    )
}
