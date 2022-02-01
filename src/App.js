import * as React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from './logo.svg';
import './sass/app.scss';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Co_je_covid from './components/co_je_covid'
import Aktualne_opatrenia from './components/aktualne_opatrenia'
import Ockovacie_miesta from './components/ockovacie_miesta/index'
import Novinky from './components/novinky/index'
import Ockovanie from './components/ockovanie'
import {Button, Nav, ProgressBar} from "react-bootstrap";
import Image from 'react-bootstrap/Image'

import $ from 'jquery';

function App() {
    $('document').ready(function () {
        start()
    })

    function createCookie(name, value) {
        document.cookie = name + "=" + value + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; SameSite=None; Secure";
    }

    function readCookie(name) {
        const cookieValue = document.cookie
            .split('; ')
            .find(row => row.startsWith(name))
            .split('=')[1];
        return cookieValue;
    }

    function checkCookie(name) {
        if (document.cookie.split(';').some((item) => item.trim().startsWith(name))) {
            return true;
        }
    }

    function start() {
        var cookieMessage = $('#cookie-message');
        if (cookieMessage == null) {
            return;
        }
        if (checkCookie('suhlas') && readCookie('suhlas') == 'yes') {
            $('#cookie-message').css('display', 'none');
        } else {
            $('#cookie-message').css('display', 'block');
        }

    }

    function OK() {
        createCookie('suhlas', 'yes');
        $('#cookie-message').css('display', 'none')
    }

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

            <Image src={'img/Header-Background.webp'} height={'50px'}/>

            <div id="cookie-message" data-cookie-expiry="60" className="alert alert-primary" role="alert">
                Používaním tejto stránky súhlasíte s používaním súborov cookie.
                <span className="alert-link" onClick="OK()">OK&nbsp;</span>
            </div>


            <Button onClick={topFunction} id="myBtn" title="Go to top">▲</Button>

            <Container className="mt-5">
                <Row>
                    <Col md={12}>
                        <Routes>
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
