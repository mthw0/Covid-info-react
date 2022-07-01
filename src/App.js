import * as React from "react";
import './sass/app.scss';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Co_je_covid from './components/co_je_covid'
import Aktualne_opatrenia from './components/aktualne_opatrenia'
import Ockovacie_miesta from './components/ockovacie_miesta/index'
import Novinky from './components/novinky/index'
import Ockovanie from './components/ockovanie'
import {Button, Nav, Row, Col, Navbar, Container} from "react-bootstrap";
import Image from 'react-bootstrap/Image'

import $ from 'jquery';

function App() {
    window.onscroll = function () {
        scrollFunction()
    };

    function scrollFunction() {
        if ($(document).scrollTop() > 400) {
            $("#myBtn").css("display", "block");
        } else {
            $("#myBtn").css("display", "none");
        }
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        $("#myBar").css("width", scrolled + "%");
    }

    function topFunction() {
        $('html').animate({scrollTop: '0px'}, 500);
    }

    return (
        <Router>
            <Navbar bg="dark" variant="dark" fixed={"top"}>
                <Container>
                    <Navbar.Brand href="#home">Covid Info</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/co_je_covid">
                            Co je covid?
                        </Nav.Link>
                        <Nav.Link href="/aktualne_opatrenia">
                            Aktuálne opatrenia
                        </Nav.Link>
                        <Nav.Link href="/ockovacie_miesta">
                            Očkovacie miesta
                        </Nav.Link>
                        <Nav.Link href="/novinky">
                            Novinky
                        </Nav.Link>
                        <Nav.Link href="/ockovanie">
                            Očkovanie
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <div className="progress-container">
                <div className="progress-bar" id="myBar"/>
            </div>

            <Image src={'img/Header-Background.webp'} width={"100%"}/>

            <Button onClick={topFunction} id="myBtn" title="Go to top">▲</Button>

            <Container className="mt-5">
                <Row>
                    <Col md={12}>
                        <Routes>
                            <Route path="/" element={<Co_je_covid/>}/>
                            <Route path="/co_je_covid" element={<Co_je_covid/>}/>
                            <Route path="/aktualne_opatrenia" element={<Aktualne_opatrenia/>}/>
                            <Route path="/ockovacie_miesta" element={<Ockovacie_miesta/>}/>
                            <Route path="/novinky" element={<Novinky/>}/>
                            <Route path="/ockovanie" element={<Ockovanie/>}/>
                        </Routes>
                    </Col>
                </Row>
            </Container>
        </Router>);
}

export default App;
