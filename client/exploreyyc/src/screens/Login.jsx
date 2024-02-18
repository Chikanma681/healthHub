import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
// import './Login.css'; // Import CSS file for custom styles

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your login logic here
    console.log('Logging in with:', email, password);
  };
  

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "400px",
    borderRadius: "10px",
    margin: "20px auto",
  };

  const labelStyle = {
    marginBottom: "8px",
    fontWeight: "bold",
    color: "black", // Set text color to black
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
    // borderRadius: "9999px",
    backgroundColor: 'white',
    border: "1px solid #808080",
    color: "#646cff",
    fontWeight: "bold",
    padding: "8px 16px",
    cursor: "pointer",
  };

  // Add focus styles for input fields
const focusedInputStyle = {
    ...inputStyle,
    borderColor: "#000", // Set border color to black when focused
    outline: "none", // Remove default focus outline
  };
  
  // Merge the focused styles when the input field is focused
  const handleInputFocus = () => {
    setInputStyle(focusedInputStyle);
  };
  
  // Reset the input style when focus is lost
  const handleInputBlur = () => {
    setInputStyle(inputStyle);
  };


  return (
    <div className="login-page">
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <Row>
          <Col md={6}>
          <h6 className="text-center mb-4" style={{ fontWeight: "600px", fontSize: '2rem', color: 'black', marginBottom: "20px", marginTop:"50px"}}>Welcome, Login!</h6>

<Form onSubmit={handleSubmit} style={formStyle}>
        <Label htmlFor="email" style={labelStyle}>
          Enter your email address
        </Label>
        <input
          id="email"
          name="email"
            style={inputStyle}
  onFocus={handleInputFocus} // Apply focused styles when input is focused
  onBlur={handleInputBlur} // Reset styles when focus is lost
          placeholder="Enter email address"
          required
          type="email"
        //   className="border-gray-400 focus:border-gray-600 focus:border-black rounded-full px-4 py-2 text-sm w-full"
        />

        <Label htmlFor="password" style={labelStyle}>
          Enter your password
        </Label>
        <input
          id="password"
          name="password"
          style={inputStyle}
          onFocus={handleInputFocus} // Apply focused styles when input is focused
          onBlur={handleInputBlur} // Reset styles when focus is lost
          placeholder="Enter password"
          type="password"
          className="border-gray-400 focus:border-gray-600 focus:border-black rounded-full px-4 py-2 text-sm w-full"
        />

        <button type="submit" style={buttonStyle}>
          Login
        </button>
      </Form>

          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
