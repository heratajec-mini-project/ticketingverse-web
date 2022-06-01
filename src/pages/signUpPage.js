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
    <div className="Login" style = {{backgroundColor:'#36454F'}}> 
    <Container style={{backgroundColor:'#D3D3D3', height:500, width: 600, alignItems:'center', justifyContent:'center'}}>
      
      <h3 style={{alignItems:'center', justifyContent:'center', marginLeft:'200px', marginTop:'50px'}}>Signup page</h3>
      <div style={{alignItems:'center', justifyContent:'center', marginTop:'50px', textAlign:'center', marginRight:'150px'}}>
      <Form className="field" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formGridPassword">
          <Form.Label className="blog" style={{marginLeft:'80px'}}>Full Name</Form.Label >
          <Form.Control
            type="text"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridEmail">
          <Form.Label className="blog" style={{marginLeft:'80px', marginTop:'10px'}}>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridPassword">
          <Form.Label className="blog" style={{marginLeft:'80px', marginTop:'10px'}}>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridPassword">
          <Form.Label className="blog" style={{marginLeft:'80px', marginTop:'10px'}}>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            className="input"
          />
        </Form.Group>

        <Link to="/">
          <Button
            variant="outline-primary"
            type="submit"
            className="lbtn" 
            style = {{color: 'white', backgroundColor: 'green', marginTop: '10%', alignItems:'center', marginLeft:'150px'}}
            // disabled={!validateForm()}
          >
            Signup
          </Button>
        </Link>
      </Form>
      </div>
    </Container>
    </div>
  );
}
