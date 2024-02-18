import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import Header from '../components/Header';

const Features = () => {
  return (
    <div>
      <Header />
      <Container className="py-5">
        <Row>
          <Col md={6} className="mb-4">
            <Link to="/booking" className="text-decoration-none">
              <Card
                className="border-2 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-110" 
              >
                <CardBody>
                  <CardImg style={{height:"350px"}} src="https://cdn.papershift.com/20221130212527/time-off-eligibility-for-medical-appointments-for-employees-in-UK-explained-by-Papershift-910x500.jpeg" />
                  <CardTitle tag="h5" className="text-blue-800">Book an Appointment</CardTitle>
                  <CardText className="text-blue-700">Click here to book an appointment</CardText>
                </CardBody>
              </Card>
            </Link>
          </Col>
          <Col md={6} className="border-1 mb-4">
            <Link to="/maps" className="text-decoration-none">
            <Card className="border-2 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-110" >
            <CardBody>
            <CardImg style={{height:"350px"}} className="border-1" src="https://www.brookings.edu/wp-content/uploads/2017/05/hospital002.jpg?w=1500" />
                  <CardTitle tag="h5" >Find Nearby Hospitals</CardTitle>
                  <CardText  >Discover hospitals near you</CardText>
                </CardBody>
              </Card>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Features;


