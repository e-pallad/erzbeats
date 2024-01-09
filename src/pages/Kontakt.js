import React, { useState, useEffect, useRef } from 'react';
import { Form, Button, Container, Row, Col, Toast, ToastContainer } from 'react-bootstrap';

import emailjs from '@emailjs/browser';

export default function Kontakt() {
    useEffect(() => {
        document.body.classList.add('contact-page')
        return () => {
            document.body.classList.remove('contact-page')
        }
    }, [])

    const radios = ["Booking", "Frage zu Tickets", "Sonstiges"];
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        reason: '',
    });

    const [formSuccess, setFormSuccess] = useState(false)
    const [formFailed, setFormFailed] = useState(false)
    
    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubjectChange = (event) => {
        setFormData({
            ...formData,
            subject: event.target.value
        });
    };

    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_fr9hjrb', 'template_wdacxdc', form.current, 'po_QV4YJn3Qy2iD1k')
        .then((result) => {
            setFormSuccess(true)
            console.log(result.text);
        }, (error) => {
            setFormFailed(true)
            console.log(error.text);
        });
    };

    return (
            <Container>
                <div className='main-content'>
                    <div className='get-in-touch'>
                        <div className='entry-header'>
                            <div className="entry-title">
                                <h2>Hier kannst du uns erreichen</h2>
                            </div>
                        </div>
                        <div className='contact-form'>
                            <Row className="mt-5">
                                <Col xs={12} md={{ span: 8, offset: 2 }}>
                                    <Form onSubmit={sendEmail} ref={form}>
                                        <Form.Group controlId="formName" className='form-group'>
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="name"
                                                placeholder="Dein Name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                            />
                                        </Form.Group>
                                        <Form.Group controlId="formEmail" className='form-group'>
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control
                                                type="email"
                                                name="email"
                                                placeholder="name@beispiel.com"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                            />
                                        </Form.Group>
                                        <Form.Group controlId="formReason" className='form-group'>
                                            <Form.Label>Grund deiner Anfrage</Form.Label>
                                            {radios.map((radio) => (
                                                <div key={`key-${radio}`}>
                                                    <Form.Check 
                                                        type="radio"
                                                        id={`id-${radio}`}
                                                        label={`${radio}`}
                                                        value={`${radio}`}
                                                        checked={formData.subject === `${radio}`}
                                                        onChange={handleSubjectChange}
                                                    />
                                                </div>
                                            ))}
                                        </Form.Group>
                                        <Form.Group controlId="formMessage" className='form-group'>
                                            <Form.Label>Nachricht</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                rows="5"
                                                name="message"
                                                placeholder="Deine Nachricht..."
                                                value={formData.message}
                                                onChange={handleInputChange}
                                            />
                                        </Form.Group>
                                        <Button variant="dark" type="submit">
                                            Absenden
                                        </Button>
                                    </Form>
                                </Col>
                            </Row>
                            {formSuccess && (
                                <ToastContainer className="p-3" position="bottom-end" style={{ zIndex: 1 }}>
                                    <Toast delay={3000} autohide bg='success'>
                                        <Toast.Header closeButton={false}>
                                            <strong className="me-auto">Erfolgreich!</strong>
                                        </Toast.Header>
                                        <Toast.Body>Wir haben deine Nachricht erhalten.</Toast.Body>
                                    </Toast>
                                </ToastContainer>
                            )}
                            {formFailed && (
                                <ToastContainer className="p-3" position="bottom-end" style={{ zIndex: 1 }}>
                                    <Toast delay={3000} autohide bg='danger'>
                                        <Toast.Header closeButton={false}>
                                            <strong className="me-auto">Fehlgeschlagen!</strong>
                                        </Toast.Header>
                                        <Toast.Body>Irgendetwas lief schief.</Toast.Body>
                                    </Toast>
                                </ToastContainer> 
                            )}
                        </div>
                    </div>
                </div>
            </Container>
    );
}