import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory
import skyline from './../assets/skyline1.jpg';

const HomeScreen = () => {
  const navigate = useNavigate(); // Initialize usenavigate

  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const buttonStyle = {
    backgroundColor: 'black',
    color: 'white',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
    margin: '10px',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const buttonHoverStyle = {
    backgroundColor: '#646cff',
  };

  // Function to handle button click and redirect to signup page
  const handleGetStartedClick = () => {
    navigate('/signup'); // Redirect to signup page
  };

  return (
    <div className="home-screen bg-gray-100">
      <div style={containerStyle} className="text-center">
        <div className="max-w-lg">
          <img src={skyline} alt="Calgary Skyline" className="mx-auto mt-8 mb-8" style={{ height: "500px", margin: "30px" }} />
          <h1 className="text-3xl font-bold mb-1">Welcome to HealthHubYYC</h1>
          <p className="text-lg text-gray-800 mb-3">Explore your healthcare options in Calgary!</p>
          <button
            style={buttonStyle}
            className="hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={handleGetStartedClick} // Call handleGetStartedClick function on button click
            onMouseEnter={(e) => e.target.style.backgroundColor = '#646cff'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'black'}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
