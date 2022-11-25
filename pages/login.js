import styles from '../style/styles.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Nav, Row, Col, Card, Form, Input, CardText, CardTitle, Container } from 'reactstrap';
import Image from 'next/image'
import tiringalogin from '../public/imagens/Tiringa.png';
import cearense from '../public/imagens/cearense.png';
import React from 'react';
import person from '../public/imagens/person.png';


export default function Home() {

  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <body className={styles.body}>
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

      <Card className={styles.Card} style={{ backgroundColor: 'transparent', border: '0' }}>
        <Row className={styles.boxDegrade}>
          <Col class="col-sm-4">
            <Container className={styles.CardOne}>
              <h1>Registre-se</h1>
              <Form action="/api/register" method="post">
                <Input type='email' name='email' placeholder='Escreva seu e-mail'></Input><br /><br />
                <Input type='name' name='name' placeholder='Digite seu nome'></Input><br /><br />
                <Input type='password' name='password' placeholder='Digite sua senha'></Input><br /><br />
                <Button type='submit' color='success' className={styles.btnUm}>Registrar</Button>
              </Form>
            </Container>

          </Col>
          <Col class="col-sm-4">
            <Container className={styles.CardTwo}>
              <h1 id="sai" >Login</h1>
              <Form action="/api/login" method="post">
                <Input type='email' name='email' placeholder='Digite seu e-mail'></Input><br /><br />
                <Input type='password' name='password' placeholder='Digite sua senha'></Input><br /><br />
                <Button type='submit' color='success' size='md' className={styles.btnDois}>ENTRAR</Button>
              </Form>
            </Container>
          </Col>
          <Image src={tiringalogin} width={200} class='tiringalogin' />
        </Row>
      </Card>
      <footer className={styles.footer}>
        <p>©Copyright 2022 by Tiringa <a href='/criadores'>Group</a>.  All rights reversed.</p>
      </footer>
    </body>
  )
}