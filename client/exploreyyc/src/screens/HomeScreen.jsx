import React, { useState, useEffect } from 'react';
import { Navbar, NavbarBrand, Container, Nav, Button } from 'reactstrap';
import './../css/Header.css'

const Header = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [isMenuHovered, setIsMenuHovered] = useState(false);
  const [isLoginHovered, setIsLoginHovered] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuth(true);
    }
  }, []);

  const handleSignIn = () => {
    signInWithGoogle().then(() => {
      localStorage.setItem('authToken', 'your_auth_token_here');
      setIsAuth(true);
    });
  };

  const handleSignOut = () => {
    logout().then(() => {
      localStorage.removeItem('authToken');
      setIsAuth(false);
    });
  };

  return (
    <Navbar className="navbar" dark expand="sm">
      <Container style={{ display: 'flex', alignItems: 'center', paddingTop: '0', paddingBottom: '0' , width:"100%"}}>
        <NavbarBrand href="/" className="brand-style">
          <h4 style={{ fontWeight: '700',}}>MediCareYYC</h4>
        </NavbarBrand>
       <div>
       <Nav className="ms-auto mb-lg-0">
            <button
              href="/menu"
              className={isMenuHovered ? 'hovered-button-style' : 'button-style'}
              onMouseEnter={() => setIsMenuHovered(true)}
              onMouseLeave={() => setIsMenuHovered(false)}
            >
              <strong>Explore</strong>
            </button>
            {isAuth ? (
              <Button
                className={isLoginHovered ? 'hovered-button-style' : 'button-style'}
                onClick={handleSignOut}
                onMouseEnter={() => setIsLoginHovered(true)}
                onMouseLeave={() => setIsLoginHovered(false)}
              >
                <strong>Logout</strong>
              </Button>
            ) : (
              <Button
                className={isLoginHovered ? 'hovered-button-style' : 'button-style'}
                onClick={handleSignIn}
                onMouseEnter={() => setIsLoginHovered(true)}
                onMouseLeave={() => setIsLoginHovered(false)}
              >
                <strong>Login</strong>
              </Button>
            )}
        </Nav>
       </div>
      </Container>
    </Navbar>
  );
};

export default Header;
