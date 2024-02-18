// import React, { useState } from 'react';
// import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import Header from '../components/Header';
// import "bootstrap/dist/css/bootstrap.css";

// const BookingPage = ({ hospitals }) => {
//   const [selectedHospital, setSelectedHospital] = useState(null);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [selectedTime, setSelectedTime] = useState(null);

//   const handleHospitalChange = (e) => {
//     setSelectedHospital(e.target.value);
//   };

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//     setSelectedTime(null); // Reset selected time when date changes
//   };

//   const handleTimeChange = (time) => {
//     setSelectedTime(time);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here
//     console.log('Form submitted:', selectedHospital, selectedDate, selectedTime);
//   };


//   // Generate time slots from 10am to 4pm with 30-minute intervals
//   const generateTimeSlots = () => {
//     const timeSlots = [];
//     let hour = 10;
//     let minute = 0;

//     while (hour < 16 || (hour === 16 && minute === 0)) {
//       const formattedTime = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
//       timeSlots.push(formattedTime);
//       minute += 30;
//       if (minute === 60) {
//         hour += 1;
//         minute = 0;
//       }
//     }

//     return timeSlots;
//   };

//   return (
//     <div>
//         <Header />
//   <Container className="py-5">
//       <Row>
//         <Col md={{ size: 6, offset: 3 }}>
//           <h2 className="text-center mb-4">Book an Appointment</h2>
//           <Form onSubmit={handleSubmit}>
//             <FormGroup>
//               <Label for="hospitalSelect"><strong>Select Hospital</strong></Label>
//               <Input type="select" name="hospital" id="hospitalSelect" onChange={handleHospitalChange}>
//                 <option value="">Select Hospital</option>
//                 {hospitals.map((hospital, index) => (
//                   <option key={index} value={hospital.NAME}>
//                     {hospital.NAME}
//                   </option>
//                 ))}
//               </Input>
//             </FormGroup>
//             <FormGroup>
//               <Label for="dateInput"><strong>Select Date</strong></Label><br/>
//               <DatePicker
//                 selected={selectedDate}
//                 onChange={handleDateChange}
//                 dateFormat="MMMM d, yyyy"
//                 style={{ width: '300px' }} // Adjust width as needed
//                 className="rounded bg-white text-black p-2 text-lg"
//                 minDate={new Date()} // Minimum selectable date is today
//               />
//             </FormGroup>
//             {selectedDate && (
//               <FormGroup>
//                 <Label for="timeInput">Select Time</Label>
//                 <Input
//                   type="select"
//                   name="time"
//                   id="timeInput"
//                   onChange={(e) => handleTimeChange(e.target.value)}
//                 >
//                   <option value=""><h6>Select Time</h6></option>
//                   {generateTimeSlots().map((timeSlot, index) => (
//                     <option key={index} value={timeSlot}>
//                       {timeSlot}
//                     </option>
//                   ))}
//                 </Input>
//               </FormGroup>
//             )}
//             <button type="submit"   onMouseEnter={(e) => e.target.style.backgroundColor = '#646cff'} onMouseLeave={(e) => e.target.style.backgroundColor = 'black'}>
//             <strong>Book Appointment</strong>
//             </button>
//           </Form>
//         </Col>
//       </Row>
//     </Container>
//     </div>
  
//   );
// };

// export default BookingPage;

import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Header from '../components/Header';
import "bootstrap/dist/css/bootstrap.css";

const BookingPage = ({ hospitals }) => {
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleHospitalChange = (e) => {
    setSelectedHospital(e.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime(null); // Reset selected time when date changes
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', selectedHospital, selectedDate, selectedTime);
    toggleModal(); // Open the modal after form submission
  };

  const handleBookingConfirmation = () => {
    // Implement logic to add booking to calendar here
    // You can use APIs like Google Calendar API or a third-party service
    // For example, you can make an HTTP request to your backend to add the booking to a calendar
    console.log('Booking confirmed and added to calendar');
    setModalOpen(false); // Close the modal after booking confirmation
  };

  // Generate time slots from 10am to 4pm with 30-minute intervals
  const generateTimeSlots = () => {
    const timeSlots = [];
    let hour = 10;
    let minute = 0;

    while (hour < 16 || (hour === 16 && minute === 0)) {
      const formattedTime = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      timeSlots.push(formattedTime);
      minute += 30;
      if (minute === 60) {
        hour += 1;
        minute = 0;
      }
    }

    return timeSlots;
  };

  return (
    <div>
      <Header />
      <Container className="py-5">
        <Row>
          <Col md={{ size: 6, offset: 3 }}>
            <h2 className="text-center mb-4">Book an Appointment</h2>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="hospitalSelect"><strong>Select Hospital</strong></Label>
                <Input type="select" name="hospital" id="hospitalSelect" onChange={handleHospitalChange}>
                  <option value="">Select Hospital</option>
                  {hospitals.map((hospital, index) => (
                    <option key={index} value={hospital.NAME}>
                      {hospital.NAME}
                    </option>
                  ))}
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="dateInput"><strong>Select Date</strong></Label><br/>
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat="MMMM d, yyyy"
                  style={{ width: '300px' }} // Adjust width as needed
                  className="rounded bg-white text-black p-2 text-lg"
                  minDate={new Date()} // Minimum selectable date is today
                />
              </FormGroup>
              {selectedDate && (
                <FormGroup>
                  <Label for="timeInput">Select Time</Label>
                  <Input
                    type="select"
                    name="time"
                    id="timeInput"
                    onChange={(e) => handleTimeChange(e.target.value)}
                  >
                    <option value=""><h6>Select Time</h6></option>
                    {generateTimeSlots().map((timeSlot, index) => (
                      <option key={index} value={timeSlot}>
                        {timeSlot}
                      </option>
                    ))}
                  </Input>
                </FormGroup>
              )}
              <Button type="submit"  onMouseEnter={(e) => e.target.style.backgroundColor = '#646cff'} onMouseLeave={(e) => e.target.style.backgroundColor = 'black'}><strong>Book Appointment</strong></Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Modal isOpen={modalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Booking Confirmation</ModalHeader>
        <ModalBody>
          You have selected your booking for {selectedHospital} on {selectedDate && selectedDate.toLocaleDateString()} at {selectedTime}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleBookingConfirmation}>Confirm</Button>{' '}
          <Button color="secondary" onClick={toggleModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default BookingPage;

