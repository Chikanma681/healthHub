import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import Header from '../components/Header';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

const Vaccines = () => {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [closestLocation, setClosestLocation] = useState(null);

  const vaccineCsvData = `ID,Address1,City,Phone,latitude,longitude
  AB00004145,6213 CENTRE ST NW,CALGARY,403-274-2444,51.10788492,-114.0633693
  AB00003431,28 PANATELLA BLVD NW,CALGARY,403-460-6707,51.16547718,-114.0712342
  // Add more vaccine locations here...
  AB00100077,80-10233 ELBOW DR SW,CALGARY,403-255-2354,50.96193461,-114.08581
  AB00000071,4940 RICHMOND RD SW,CALGARY,403-299-4487,51.01911946,-114.1589891
  AB00003872,110-8500 BLACKFOOT TR SE,CALGARY,403-253-5700,50.97661519,-114.046636
  AB00001123,1711 4 ST SW,CALGARY,403-228-5067,51.0372509,-114.0717656
  AB00003782,105-4411 16 AVE NW,CALGARY,403-247-9502,51.06805148,-114.1588588
  AB00001177,700-2220 68 ST NE,C`;

  // Split the CSV data into rows
  const rows = vaccineCsvData.split('\n');

  // Extract headers
  const headers = rows[0].split(',');

  // Initialize an array to store the objects
  const locationDataList = [];

  // Parse each row (starting from index 1 as index 0 contains headers)
  for (let i = 1; i < rows.length; i++) {
    const values = rows[i].split(',');
    const obj = {};
    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = values[j];
    }
    locationDataList.push(obj);
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentPosition({ lat: latitude, lng: longitude });
          findClosestLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error('Error getting current location:', error);
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }, []);

  const findClosestLocation = (currentLocation) => {
    let minDistance = Number.MAX_VALUE;
    let closestLocation = null;

    locationDataList.forEach((location) => {
      const distance = calculateDistance(
        currentLocation.lat,
        currentLocation.lng,
        parseFloat(location.latitude),
        parseFloat(location.longitude)
      );
      if (distance < minDistance) {
        minDistance = distance;
        closestLocation = location;
      }
    });

    setClosestLocation(closestLocation);
  };

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1); // deg2rad below
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return d;
  };

  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };

  const apiKey = process.env.MAPS_API;

  const onMarkerClick = (location) => {
    setSelectedLocation(location);
  };

  return (
    <div>
      <Header />
      <h6 className="text-center mx-auto" style={{ fontWeight: "300px", fontSize: '2rem', color: 'black', marginTop: "50px" }}>Vaccination Sites Near You</h6>
      <div style={{ height: '400px', width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: '#white', marginTop: '25px' }}>
        <LoadScript googleMapsApiKey={apiKey} onLoad={() => setMapLoaded(true)}>
          {mapLoaded && (
            <GoogleMap
              mapContainerStyle={{ width: '50%' }}
              zoom={10}
              center={currentPosition}
            >
              {currentPosition && <Marker position={currentPosition} title="Your Location" />}
              {locationDataList.map((location, index) => (
                <Marker
                  key={index}
                  position={{
                    lat: parseFloat(location.latitude),
                    lng: parseFloat(location.longitude)
                  }}
                  icon={{
                    url: 'https://cdn-icons-png.flaticon.com/512/4320/4320350.png',
                    scaledSize: new window.google.maps.Size(40, 40)
                  }}
                  title={location.Address1}
                  onClick={() => onMarkerClick(location)}
                />
              ))}
              {selectedLocation && (
                <InfoWindow
                  position={{ lat: parseFloat(selectedLocation.latitude), lng: parseFloat(selectedLocation.longitude) }}
                  onCloseClick={() => setSelectedLocation(null)}
                >
                  <div style={{ color: "black" }}>
                    <h3>{selectedLocation.Address1}</h3>
                    <p>{selectedLocation.City}</p>
                    <p>{selectedLocation.Phone}</p>
                  </div>
                </InfoWindow>
              )}
            </GoogleMap>
          )}
        </LoadScript>
      </div>
      {closestLocation && (
        <div style={{ marginTop: '20px', width:"50%", marginBottom:"20px"}} className='mx-auto'>
          <Card body >
            <CardTitle tag="h5" style={{fontWeight:"500px"}}>Closest Vaccine Location</CardTitle>
            <CardBody>
              <CardText>
                <strong>Name:</strong> {closestLocation.Address1}<br />
                <strong>City:</strong> {closestLocation.City}<br />
                <strong>Phone:</strong> {closestLocation.Phone}
              </CardText>
            </CardBody>
          </Card>
        </div>
      )}

    </div>
  );
}

export default Vaccines;
