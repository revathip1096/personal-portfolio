import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Container, Form, Button } from 'react-bootstrap';
import "../pages/style.css";
// Import your custom CSS file

function Contactpage() {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send('service_k28ferw', 'template_ehc6x9e', formData, 'Q7xTGEoNKyGfAxs7i')
      .then((response) => {
        console.log('Email sent successfully:', response);
        alert('Email sent successfully'); // You can replace this with your preferred notification method
      })
      .catch((error) => {
        console.error('Email sent failed:', error);
        alert('Email sent failed'); // You can replace this with your preferred notification method
      });

    // Clear form data
    setFormData({
      from_name: '',
      from_email: '',
      message: '',
    });
  };

  return (
    <div className="contactbackground">
    <Container className="mt-5">
      <h2>Send a Message</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            required
            type="text"
            placeholder="Your Name"
            name="from_name"
            value={formData.from_name}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            required
            type="email"
            placeholder="Your Email"
            name="from_email"
            value={formData.from_email}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            required
            as="textarea"
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows="4"
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Send
        </Button>
      </Form>
     
    </Container>
    </div>
  );
}

export default Contactpage;
