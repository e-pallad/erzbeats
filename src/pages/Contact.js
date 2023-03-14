import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';


export default function Contact() {
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
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        // Here you would typically send the form data to a server for processing.
        // For the purposes of this example, we're just logging the data to the console.
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
                                    <Form onSubmit={handleSubmit}>
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
                        </div>
                    </div>
                </div>
            </Container>
    );
}