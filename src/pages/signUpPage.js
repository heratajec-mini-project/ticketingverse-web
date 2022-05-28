import React from 'react'
import { Link } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import "../styles/fill.css";

export default function signUp() {
    return (
 <Container>
        <h3>Signup page</h3>
        <Form className="field">
        <Form.Group className="mb-3" controlId="formGridPassword">
            <Form.Label className="blog">Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Full name"
              className="input"
            />
          </Form.Group>


          <Form.Group className="mb-3" controlId="formGridEmail">
            <Form.Label className="blog">Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              className="input"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridPassword">
            <Form.Label className="blog">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
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
              <Button variant="outline-primary" type="submit" className="lbtn">
                Signup
              </Button>
            </Link>
            </Form>

      </Container>

    )
}