import React, { useState, useEffect } from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';

export default function Header() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

    const [menuOpen, setMenuOpen] = useState(false)
    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const handleClose = () => setMenuOpen(false)

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
                    <Navbar.Brand href='/' className='site-branding'>
                        <picture>
                            <source 
                                alt="Erzbeats logo"
                                srcSet={require("../images/erzbeats.webp")} 
                                width={"auto"}
                                height={130}
                                className="d-inline-block align-top"
                            />
                            <img
                                alt="Erzbeats logo"
                                src={require("../images/erzbeats.png")}
                                width={"auto"}
                                height={130}
                                className="d-inline-block align-top"
                            />
                        </picture>
                    </Navbar.Brand>
                    <Navbar.Toggle 
                        aria-controls={`offcanvasNavbar-expand-lg`}
                        onClick={toggleMenu}
                    />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-lg`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                        placement="start"
                        restoreFocus={false}
                        show={menuOpen}
                        onHide={handleClose}
                        scroll={true}
                    >
                        <Offcanvas.Header closeButton className={`${isMobile ? "bg-grey" : ""}`}>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`} className='site-branding'>
                                <picture>
                                    <source 
                                        alt="Erzbeats Logo"
                                        srcSet={require("../images/erzbeats.webp")} 
                                        width={"auto"}
                                        height={120}
                                        className="d-inline-block align-top"
                                    />
                                    <img
                                        alt="Erzbeats Logo"
                                        src={require("../images/erzbeats.png")}
                                        width={"auto"}
                                        height={120}
                                        className="d-inline-block align-top"
                                    />
                                </picture>
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className={`${isMobile ? "bg-grey" : ""}`}>
                            <Nav className={`${isMobile ? "site-navigation" : "hidden site-navigation"}`} as={'nav'}>
                                <ul>
                                    <Nav.Item as={'li'}>
                                        <Nav.Link href="/">Home</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as={'li'}>
                                        <Nav.Link href="/bilder">Vergangenheit</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as={'li'}>
                                        <Nav.Link href="/contact">Kontakt</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as={'li'}>
                                        {isMobile ? (<a href="/#anreise" className='nav-link' onClick={toggleMenu}>Anreise</a>) : (<Nav.Link href="/#anreise">Anreise</Nav.Link>)}
                                    </Nav.Item>
                                    <Nav.Item as={'li'}>
                                        {isMobile ? (<Nav.Link href="/tickets">Tickets</Nav.Link>) : (<Button href='/tickets' variant="outline-light">Tickets</Button>)}
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