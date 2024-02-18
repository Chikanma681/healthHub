import React, { useState } from 'react';
import { Container, Row, Col, Form, Label, Input, Button } from 'reactstrap';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailFocus = () => {
    setIsEmailFocused(true);
  };

  const handleEmailBlur = () => {
    setIsEmailFocused(false);
  };

  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
  };

  const handlePasswordBlur = () => {
    setIsPasswordFocused(false);
  };

  const formStyle= {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "400px",
    borderRadius: "10px",
    padding: "20px",
    margin: "20px auto",
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your signup logic here
    console.log('Signing up with:', firstName, lastName, email, password);
  };

  const inputStyle = {
    borderRadius: "9999px",
    width: "350px",
    marginBottom: "16px",
    padding: "8px 16px",
    border: "1px solid #D1D5DB",
    backgroundColor:"white"
  };

  const buttonStyle = {
    backgroundColor: 'white',
    border: "1px solid #808080",
    color: "#646cff",
    fontWeight: "bold",
    padding: "8px 16px",
    cursor: "pointer",
  };
  
  const labelStyle = {
    marginBottom: "8px",
    fontWeight: "bold",
    color: "black", // Set text color to black
  };

  return (
    <div className="signup-page">
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <Row>
          <Col md={6}>
            <h6 className="text-center mb-4" style={{ fontWeight: "600px", fontSize: '2rem', color: 'black', marginBottom: "20px", marginTop:"50px"}}>Welcome, Signup!</h6>
            <Form onSubmit={handleSubmit} style={formStyle}>
      <Label htmlFor="firstname" style={labelStyle}>
          Enter your first name
        </Label>
        <input
          id="firstname"
          name="first_name"
          style={inputStyle}
          placeholder="Enter first name"
          className="border-gray-400 focus:border-gray-600 focus:border-black rounded-full px-4 py-2 text-sm w-full"
          required
        />
        <Label htmlFor="lastname" style={labelStyle}>
          Enter your last name
        </Label>
        <input
          id="lastname"
          name="last_name"
          style={inputStyle}
          placeholder="Enter last name"
          className="border-gray-400 focus:border-gray-600 focus:border-black rounded-full px-4 py-2 text-sm w-full"
          required
        />

        <Label htmlFor="email" style={labelStyle}>
          Enter your email address
        </Label>
        <input
          id="email"
          name="username"
          style={inputStyle}
          placeholder="Enter email address"
          required
          type="email"
          className="border-gray-400 focus:border-gray-600 focus:border-black rounded-full px-4 py-2 text-sm w-full"
        />

        <Label htmlFor="password" style={labelStyle}>
          Enter your password
        </Label>
        <input
          id="password"
          name="password"
          style={inputStyle}
          placeholder="Enter password"
          type="password"
          className="border-gray-400 focus:border-gray-600 focus:border-black rounded-full px-4 py-2 text-sm w-full"
        />


        <button type="submit" style={buttonStyle}>
          Sign Up
        </button>
      </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Signup;
