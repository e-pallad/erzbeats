import React, { useState, useEffect } from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';

export default function Header() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

    useEffect(() => {
        window.addEventListener("resize", () => {
            const ismobile = window.innerWidth < 992;
            if (ismobile !== isMobile) setIsMobile(ismobile);
        }, false);
    }, [isMobile]);

    return (
        <header className='site-header'>
            <Navbar key='lg' expand='lg' className='header-bar'>
                <Container fluid>
                    <Navbar.Brand href='/home' className='site-branding'>
                        {process.env.REACT_APP_PROJEKTNAME}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
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
                            <Nav className={`${isMobile ? "site-navigation" : "hidden site-navigation"}`} as={'nav'}>
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
                                        {isMobile ? (<Nav.Link href="/buytickets">Tickets</Nav.Link>) : (<Button href='/buytickets' as={'button'} variant="outline-light">Tickets</Button>)}
                                    </Nav.Item>
                                </ul>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </header>
    );
}