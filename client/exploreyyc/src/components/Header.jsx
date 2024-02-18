import React, { useState, useEffect } from 'react';
import { Navbar, NavbarBrand, Container, Nav, NavLink, NavItem, Button } from 'reactstrap';

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

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  };

  const brandStyle = {
    fontSize: '1.25rem', // Adjust font size as desired
    marginRight: 'auto',
    color: '#ffffff', // Set text color to white
    textDecoration: 'none',
  };

  const buttonStyle = {
    backgroundColor: '#1a1a1a',
    borderColor: 'transparent',
    marginLeft: '20px',
    color: '#ffffff',
    textDecoration: 'none',
  };

  const hoveredButtonStyle = {
    ...buttonStyle,
    color: '#646cff',
  };
  return (
    <Navbar style={{ backgroundColor: '#242424', color: '#ffffff' }} dark expand="sm" >
      <Container style={{ ...containerStyle, paddingTop: '0', paddingBottom: '0' }}>
        <NavbarBrand href="/" style={brandStyle}>
          <h4 style={{ fontWeight: '700', margin: '0' }}>ExploreYYC</h4>
        </NavbarBrand>
        <Nav navbar className="ms-auto mb-lg-0">
            <button
              href="/menu"
              style={isMenuHovered ? hoveredButtonStyle : buttonStyle}
              onMouseEnter={() => setIsMenuHovered(true)}
              onMouseLeave={() => setIsMenuHovered(false)}
            >
              <strong>Explore</strong>
            </button>
            {isAuth ? (
              <Button
                style={isLoginHovered ? hoveredButtonStyle : buttonStyle}
                onClick={handleSignOut}
                onMouseEnter={() => setIsLoginHovered(true)}
                onMouseLeave={() => setIsLoginHovered(false)}
              >
                <strong>Logout</strong>
              </Button>
            ) : (
              <Button
                style={isLoginHovered ? hoveredButtonStyle : buttonStyle}
                onClick={handleSignIn}
                onMouseEnter={() => setIsLoginHovered(true)}
                onMouseLeave={() => setIsLoginHovered(false)}
              >
                <strong>Login</strong>
              </Button>
            )}
        </Nav>
      </Container>
    </Navbar>
  );
  
};

export default Header;
