// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Container, Row, Col, Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
// import Header from '../components/Header';

// const Features = () => {
//   return (
//     <div>
//       <Header />
//       <Container className="py-5">
//         <Row>
//           <Col md={4} className="mb-4">
//             <Link to="/booking" className="text-decoration-none">
//               <Card
//                 className="border-2 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-110" 
//               >
//                 <CardBody>
//                   <CardImg style={{height:"350px"}} src="https://cdn.papershift.com/20221130212527/time-off-eligibility-for-medical-appointments-for-employees-in-UK-explained-by-Papershift-910x500.jpeg" />
//                   <CardTitle tag="h4" className="text-blue-800">Book an Appointment</CardTitle>
//                   <CardText className="text-blue-700">Click here to book an appointment</CardText>
//                 </CardBody>
//               </Card>
//             </Link>
//           </Col>
//           <Col md={4} className="border-1 mb-4">
//             <Link to="/maps" className="text-decoration-none">
//             <Card className="border-2 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-110" >
//             <CardBody>
//             <CardImg style={{height:"350px"}} className="border-1" src="https://www.brookings.edu/wp-content/uploads/2017/05/hospital002.jpg?w=1500" />
//                   <CardTitle tag="h4" >Find Nearby Hospitals</CardTitle>
//                   <CardText  >Discover hospitals near you</CardText>
//                 </CardBody>
//               </Card>
//             </Link>
//           </Col>
//           <Col md={4} className="border-1 mb-4">
//             <Link to="/vaccines" className="text-decoration-none">
//             <Card className="border-2 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-110" border="dark" style={{ width: '18rem' }}>
//             <CardBody>
//             <CardImg style={{height:"350px"}} className="border-1" src="https://doh.sd.gov/media/5yidr3tm/doh-library_assets29.jpg?width=768&height=394&v=1d99e3fa0e48780" />
//                   <CardTitle tag="h4" >Vaccination Sites</CardTitle>
//                   <CardText  >Discover vaccination sites near you</CardText>
//                 </CardBody>
//               </Card>
//             </Link>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default Features;

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
          <Col md={4} className="mb-4">
            <Link to="/booking" className="text-decoration-none">
              <Card className="border-2 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-110">
                <CardBody>
                  <CardImg style={{ height: "350px" }} src="https://cdn.papershift.com/20221130212527/time-off-eligibility-for-medical-appointments-for-employees-in-UK-explained-by-Papershift-910x500.jpeg" />
                  <CardTitle tag="h4" className="text-blue-800">Book an Appointment</CardTitle>
                  <CardText className="text-blue-700">Click here to book an appointment</CardText>
                </CardBody>
              </Card>
            </Link>
          </Col>
          <Col md={4} className="mb-4">
            <Link to="/maps" className="text-decoration-none">
              <Card className="border-2 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-110">
                <CardBody>
                  <CardImg style={{ height: "350px" }} src="https://www.brookings.edu/wp-content/uploads/2017/05/hospital002.jpg?w=1500" />
                  <CardTitle tag="h4">Find Nearby Hospitals</CardTitle>
                  <CardText>Discover hospitals near you</CardText>
                </CardBody>
              </Card>
            </Link>
          </Col>
          <Col md={4} className="mb-4">
            <Link to="/vaccines" className="text-decoration-none">
              <Card className="border-2 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-110">
                <CardBody>
                  <CardImg style={{ height: "350px" }} src="https://doh.sd.gov/media/5yidr3tm/doh-library_assets29.jpg?width=768&height=394&v=1d99e3fa0e48780" />
                  <CardTitle tag="h4">Vaccination Sites</CardTitle>
                  <CardText>Discover vaccination sites near you</CardText>
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



