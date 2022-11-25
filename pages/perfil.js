import styles from '../style/styles.module.css'
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Nav, Row, Col, Label, FormText, Container, Input } from 'reactstrap';
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
      <Row className={styles.boxDegrade} style={{ textAlign: '-webkit-center', textAlignLast: 'start' }}>
        <Container>
          <Col xs="12" sm="6" style={{ bordertop: 'groov' }}>
            <Form>
              <FormGroup>
                <Label for="email"><h3>Email</h3></Label>
                <Input type="email" name="email" id="email" placeholder="Digite seu email" />
              </FormGroup>

              <FormGroup>
                <Label for="nome"><h3>Nome Completo</h3></Label>
                <Input type="text" name="nome" id="nome" placeholder="Digite seu Nome Completo" />
              </FormGroup>
              
              <FormGroup>
                <Label for="endereco"><h3>Endereço</h3></Label>
                <Input type="text" name="endereco" id="endereco" placeholder="Digite seu endereço" />
              </FormGroup>
              
              <FormGroup>
                <Label for="numero"><h3>Numero</h3></Label>
                <Input type="number" name="numero" id="numero" placeholder="Digite o numero" />
              </FormGroup>
              
              <FormGroup>
                <Label for="complemento"><h3>Complemento</h3></Label>
                <Input type="text" name="complemento" id="complemento" placeholder="Digite o complemento caso tenha" />
              </FormGroup>
              
              <FormGroup>
                <Label for="cep"><h3>CEP</h3></Label>
                <Input type="number" name="cep" id="cep" placeholder="Digite seu CEP" />
              </FormGroup>
              
              <FormGroup>
                <Label for="cpf"><h3>CPF</h3></Label>
                <Input type="number" name="cpf" id="cpf" placeholder="Digite seu CPF" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleFile"><h3>RG FRENTE E VERSO</h3></Label>
                <Input type="file" name="file" id="exampleFile" />
                <FormText color="muted">
                  Informações totalmente essenciais para seguraça da empresa e do usuário. aceite nossas politicas de negocios.
                </FormText>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />{' '}
                  Aceito
                </Label>
              </FormGroup>
              <br />
              <Button class="btn btn-success" style={{width: '400px', textAlignLast: 'auto', display: 'table'}}>Enviar</Button>
            </Form>
          </Col>
        </Container>
      </Row>
      <footer className={styles.footer}>
        <p>©Copyright 2022 by Tiringa <a href='/criadores'>Group</a>.  All rights reversed.</p>
      </footer>
    </Col>
  )
}