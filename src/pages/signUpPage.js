import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import "../styles/fill.css";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <Container>
      <h3>Signup page</h3>
      <Form className="field" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formGridPassword">
          <Form.Label className="blog">Full Name</Form.Label >
          <Form.Control
            type="text"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridEmail">
          <Form.Label className="blog">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridPassword">
          <Form.Label className="blog">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridPassword">
          <Form.Label className="blog">Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            className="input"
          />
        </Form.Group>

        <Link to="/">
          <Button
            variant="outline-primary"
            type="submit"
            className="lbtn" 
            style = {{color: 'white', backgroundColor: 'green', marginTop: '10%', alignItems:'center'}}
            // disabled={!validateForm()}
          >
            Signup
          </Button>
        </Link>
      </Form>
    </Container>
  );
}
