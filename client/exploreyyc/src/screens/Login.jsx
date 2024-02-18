import React, { useState } from 'react';
import { Container, Row, Col, Form, Label, Input, Button } from 'reactstrap';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: e.target[0].value,
          password: e.target[1].value
        })
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data); // Handle successful signup response
        navigate('/features');
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
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
    color: "black",
  };

  const inputStyle = {
    borderRadius: "9999px",
    width: "350px",
    marginBottom: "16px",
    padding: "8px 16px",
    border: "1px solid #D1D5DB",
    color:"black",
    backgroundColor: "white",
  };

  const buttonStyle = {
    backgroundColor: '#1a1a1a',
    borderColor: 'transparent',
    color: '#ffffff',
    textDecoration: 'none',
  };

  return (
    <div className="login-page">
      <Header />
      <h6 className="text-center mb-4 mx-auto" style={{ fontWeight: "600px", fontSize: '2rem', color: 'black', marginTop: "50px" }}>Welcome, Login!</h6>
      <Container className="d-flex justify-content-center" style={{ minHeight: '100vh' }}>
        <Row>
          <Col md={6}>
            <Form onSubmit={handleSubmit} style={formStyle}>
              <Label htmlFor="email" style={labelStyle}>
                Enter your email address
              </Label>
              <input
                id="email"
                name="email"
                style={inputStyle}
                placeholder="Enter email address"
                required
                type="email"
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
              />

              <button type="submit" style={buttonStyle}  onMouseEnter={(e) => e.target.style.backgroundColor = '#646cff'} onMouseLeave={(e) => e.target.style.backgroundColor = 'black'}>
                <strong>Login</strong>
              </button>
            </Form>
            <Container className="text-center mt-3"> {/* Centered container */}
        <strong className='text-center mx-auto'>New user, <Link to="/signup" style={{fontWeight:"500px"}}>Signup</Link></strong>
      </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
