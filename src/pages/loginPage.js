import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import "../styles/fill.css";
import "../pages/signUpPage";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login" style = {{backgroundColor:'#36454F'}}>
      <Container style={{backgroundColor:'#D3D3D3', height:500, width: 400, alignItems:'center', justifyContent:'center'}}>
        <div style={{alignItems:'center', justifyContent:'center', marginTop:'20%', textAlign:'center'}}>

        <Form onSubmit={handleSubmit} >
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label style={{marginTop: '5%'}}>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
            <Form.Group controlId="formBasicCheckbox" className='check'>
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
          </Form.Group>
          <h6 className="put">
            <Link to="/forgot">Forgot Password</Link>
          </h6>
          

          <Button
            block
            variant='success'
            size="lg"
            type="submit"
            className="lbtn"
           
            disabled={!validateForm()}
            style={{alignItems:'center', justifyContent:'center'}}>
            Login
          </Button>
              
          <h6 className="put">
            <Link to="signUp">Don't have an account?Sign Up</Link>
          </h6>
        </Form>
            </div>
      </Container>
    </div>
  );
}
