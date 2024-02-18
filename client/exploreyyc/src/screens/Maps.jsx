import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import Header from '../components/Header';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';


const Maps = () => {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [closestHospital, setClosestHospital] = useState(null);

  const csvData = `TYPE,NAME,ADDRESS,COMM_CODE,LAT,LONG
  Hospital,Alberta Children's Hospital,2888 Shaganappi Trail NW,UOC,-114.1479576,51.0745599
  PHS Clinic,East Calgary Health Centre,4715 8 AV SE,FLN,-113.9672201,51.0450485
  PHS Clinic,South Calgary Health Centre,31 Sunpark Plaza SE,SDC,-114.058575,50.9025753
  PHS Clinic,Northwest Community Health Centre,109 1829 Ranchlands BV NW,RAN,-114.1971615,51.1233336
  Hospital,Rockyview General Hospital,7007 - 14 ST SW,EAG,-114.0963207,50.9918289
  PHS Clinic,North Hill Community Health Centre,1527 19 ST NW,HOU,-114.1065071,51.0653216
  PHS Clinic,Thornhill Community Health Centre,6617 Centre ST NW,HUN,-114.0639146,51.1121862
  PHS Clinic,Sheldon M. Chumir Health Centre,1213 - 4 ST SW,BLN,-114.0721296,51.0411634
  Hospital,South Health Campus,4448 FRONT ST SE,SET,-113.9517038,50.8821019
  PHS Clinic,Acadia Community Health Centre,151 - 86 AV SE,ACA,-114.0709401,50.975072
  Hospital,Peter Lougheed Medical Centre,3500 - 26 AV NE,SUN,-113.9839435,51.0790163
  PHS Clinic,Village Square Community Health Centre,2623 - 56 ST NE,PIN,-113.9535557,51.0755389
  Hospital,Foothills Hospital,1403 - 29 ST NW,STA,-114.1321766,51.0641829
  PHS Clinic,Shaganappi Complex Health Centre,3415 - 8 AV SW,SPR,-114.1368419,51.0448871`;

  // Split the CSV data into rows
  const rows = csvData.split('\n');

  // Extract headers
  const headers = rows[0].split(',');

  // Initialize an array to store the objects
  const dataList = [];

  // Parse each row (starting from index 1 as index 0 contains headers)
  for (let i = 1; i < rows.length; i++) {
    const values = rows[i].split(',');
    const obj = {};
    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = values[j];
    }
    dataList.push(obj);
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentPosition({ lat: latitude, lng: longitude });
          findClosestHospital({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error('Error getting current location:', error);
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }, []);

  const findClosestHospital = (currentLocation) => {
    let minDistance = Number.MAX_VALUE;
    let closestHospital = null;

    dataList.forEach((hospital) => {
      const distance = calculateDistance(
        currentLocation.lat,
        currentLocation.lng,
        parseFloat(hospital.LAT),
        parseFloat(hospital.LONG)
      );
      if (distance < minDistance) {
        minDistance = distance;
        closestHospital = hospital;
      }
    });

    setClosestHospital(closestHospital);
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

  // Google Maps API Key
  const apiKey = 'AIzaSyDHGdazSoDmRV6aM7-zH0VQMhP8PLsfafk';
//   console.log("POINT (-114.1368419 51.0448871)".split(' ')[1])
//   console.log(dataList)
const onMarkerClick = (hospital) => {
    setSelectedHospital(hospital);
  };
  return (
    <div>
      <Header />
      <h6 className="text-center mx-auto" style={{ fontWeight: "300px", fontSize: '2rem', color: 'black', marginTop: "50px" }}>Hospitals & Clinic Near you</h6>
      <div style={{ height: '400px', width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: '#white', marginTop: '25px' }}>
        <LoadScript googleMapsApiKey={apiKey} onLoad={() => setMapLoaded(true)}>
          {mapLoaded && (
            <GoogleMap
              mapContainerStyle={{ width: '50%' }}
              zoom={10}
              center={currentPosition}
            >
              {currentPosition && <Marker position={currentPosition} title="Your Location" />}
              {dataList.map((hospital, index) => (
                <Marker
                  key={index}
                  position={{
                    lat: parseFloat(hospital.LONG),
                    lng: parseFloat(hospital.LAT)
                  }}
                  icon={{
                    url: 'https://cdn-icons-png.flaticon.com/512/4320/4320350.png',
                    scaledSize: new window.google.maps.Size(40, 40)
                  }}
                  title={hospital.NAME}
                  onClick={() => onMarkerClick(hospital)}
                />
              ))}
              {selectedHospital && (
                <InfoWindow
                  position={{ lat: parseFloat(selectedHospital.LONG), lng: parseFloat(selectedHospital.LAT) }}
                  onCloseClick={() => setSelectedHospital(null)}
                >
                  <div style={{ color: "black" }}>
                    <h3>{selectedHospital.NAME}</h3>
                    <p>{selectedHospital.ADDRESS}</p>
                  </div>
                </InfoWindow>
              )}
            </GoogleMap>
          )}
        </LoadScript>
      </div>
      {closestHospital && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Card border="dark" style={{ width: '18rem' }}>
            <CardBody>
              <CardTitle tag="h5">Suggested Hospital</CardTitle>
              <CardText><strong>Name: </strong>{closestHospital.NAME}</CardText>
              <CardText><strong>Address: </strong> {closestHospital.ADDRESS}</CardText>
            </CardBody>
          </Card>
        </div>
      )}
    </div>
  );
}

export default Maps;
