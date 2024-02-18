import React, { useState } from 'react';
import { Container, Row, Col, Form, Label, Input, Button } from 'reactstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const navigate = useNavigate();
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('http://127.0.0.1:5000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                first_name: e.target[0].value,
                last_name: e.target[1].value,
                username: e.target[2].value,
                password: e.target[3].value
            })
        });
        if (response.ok) {
            const data = await response.json();
            console.log(data); // Handle successful signup response
            navigate('/login');
        } else {
            console.error('Signup failed');
        }
    } catch (error) {
        console.error('Error during signup:', error);
    }
};


  const inputStyle = {
    borderRadius: "9999px",
    width: "350px",
    marginBottom: "16px",
    color:"black",
    padding: "8px 16px",
    border: "1px solid #D1D5DB",
    backgroundColor:"white"
  };

  const buttonStyle = {
    backgroundColor: '#1a1a1a',
    borderColor: 'transparent',
    color: '#ffffff',
    textDecoration: 'none',
    transition: 'color 0.3s', // Add transition effect for smoother color change
    cursor: 'pointer',
  };
  
  // Add hover effect for changing text color
  buttonStyle[':hover'] = {
    backgroundColor: '#646cff',
  };
  
  
  const labelStyle = {
    marginBottom: "8px",
    fontWeight: "bold",
    color: "black", // Set text color to black
  };

  return (
    <div className="signup-page">
        <Header/>
            <h6 className="text-center mb-4" style={{ fontWeight: "600px", fontSize: '2rem', color: 'black', marginBottom: "20px", marginTop:"50px"}}>Welcome, Signup!</h6>
      <Container className="d-flex justify-content-center" style={{ minHeight: '100vh' }}>
        <Row>
          <Col md={6}>
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


        <button type="submit" style={buttonStyle}  onMouseEnter={(e) => e.target.style.backgroundColor = '#646cff'} onMouseLeave={(e) => e.target.style.backgroundColor = 'black'}>
          <strong>Sign Up</strong>
        </button>
      </Form>
      <div>
      <strong className='text-center mx-auto'>Existing user, <Link to="/login" style={{fontWeight:"500px"}}>Login</Link></strong>
      </div>
          </Col>
          
        </Row>
        
      </Container>
    </div>
  );
};

export default Signup;
