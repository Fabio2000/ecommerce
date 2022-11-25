import styles from '../style/styles.module.css'
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Nav, Row, Col, Table, Container } from 'reactstrap';
import Image from 'next/image'
import cearense from '../public/imagens/cearense.png';
import person from '../public/imagens/person.png';



export default function () {
    const [dropdownOpen, setDropdownOpen] = React.useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <Col className={styles.body}>
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
            <Row className={styles.boxDegrade} style={{ textAlign: '-webkit-center' }}>
                <Container>
                    <Col xs="6" sm="8" style={{ bordertop: 'groov' }}>
                        <Table dark>
                            <thead>
                                <tr>
                                    <th>Primeiro Nome</th>
                                    <th>Segundo Nome</th>
                                    <th>RGM</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Fabio</td>
                                    <td>Rodrigues da Silva</td>
                                    <td>28285212</td>
                                </tr>
                                <tr>
                                    <td>Luis Paulo</td>
                                    <td>de Oliveira Ferreira</td>
                                    <td>27966461</td>
                                </tr>
                                <tr>
                                    <td>Gabriel José</td>
                                    <td>do Nascimento</td>
                                    <td>27530205</td>
                                </tr>
                                <tr>
                                    <td>João Vitor</td>
                                    <td>França de Melo</td>
                                    <td>27006948</td>
                                </tr>
                                <tr>
                                    <td>Miriã</td>
                                    <td>Fernandes Costa</td>
                                    <td>28323874</td>
                                </tr>
                            </tbody>
                        </Table>

                        <Table dark>
                            <thead style={{ textAlignLast: 'center' }}>
                                <tr>
                                    <th>CNPJ: 43.489.523/0001-56</th>
                                    <th>Fone de contato: +55 11 948943850</th>
                                </tr>
                            </thead>
                        </Table>

                    </Col>
                </Container>
            </Row>
            <footer className={styles.footer}>
                <p>©Copyright 2022 by Tiringa <a href='/criadores'>Group</a>.  All rights reversed.</p>
            </footer>
        </Col>
    )
}