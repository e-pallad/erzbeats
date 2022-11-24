import React, { useState } from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';

export default function Header() {
    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
    };

    return (
        <header className='site-header'>
            <Navbar key='lg' expand='lg' className='header-bar'>
                <Container fluid>
                    <Navbar.Brand href='/home' className='site-branding'>
                        {process.env.REACT_APP_PROJEKTNAME}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} onClick={handleToggle} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-lg`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                        placement="start"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                                {process.env.REACT_APP_PROJEKTNAME}
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className={"site-navigation " + (isActive ? "hidden" : null)} as={'nav'}>
                                <ul>
                                    <Nav.Item as={'li'}>
                                        <Nav.Link href="/home">Home</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as={'li'}>
                                        <Nav.Link href="/artists">Artists</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as={'li'}>
                                        <Nav.Link href="/contact">Kontakt</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as={'li'}>
                                        <Button href='/buytickets' as={'Button'} variant="outline-light">Tickets</Button>
                                    </Nav.Item>
                                </ul>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            {/** 
            <div className='header-bar'>
                <Container fluid>
                    <Row className="align-items-center">
                        <Col xs="10" lg="4">
                            <h1 className='site-branding flex'>
                                <a href='/home'>{process.env.REACT_APP_PROJEKTNAME}</a>
                            </h1>
                        </Col>
                        <Col xs="2" lg="8">
                            <Nav className="site-navigation" as={'nav'}>
                                <ul>
                                    <Nav.Item as={'li'}>
                                        <Nav.Link href="/home">Home</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as={'li'}>
                                        <Nav.Link href="/artists">Artists</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as={'li'}>
                                        <Nav.Link href="/contact">Kontakt</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as={'li'}>
                                        <Button href='/buytickets' as={'Button'} variant="outline-light">Tickets</Button>
                                    </Nav.Item>
                                </ul>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </div>
            */}
        </header>
    );
}