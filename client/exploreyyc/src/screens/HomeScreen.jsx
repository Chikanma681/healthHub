import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import skyline from './../assets/skyline1.jpg';
// import "./../css/HomeScreen.css"

const HomeScreen = () => {
  return (
    <div className="home-screen">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
          <Col md={6}>
            <img src={skyline} alt="Calgary Skyline" className="img-fluid" />
          </Col>
            <h1 className="display-3">Welcome MediCareYYC</h1>
            <strong>Explore your healthcare options in Calgary!</strong>
            <br/>
            <Button color="primary" style={{margin:'10px'}}>Get Started</Button>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default HomeScreen;
