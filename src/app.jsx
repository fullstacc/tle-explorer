import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

const TLELine = ({ parts }) => (
  <div className="tle">
    {parts.map((part, index) => (
      <React.Fragment key={index}>
        <span data-tooltip={part.tooltip}>{part.text}</span>
        {' '}
      </React.Fragment>
    ))}
  </div>
);

const App = () => {
  const tle1_parts = [
        { text: '1', tooltip: 'Line number (1 or 2)' },
        { text: '25544', tooltip: 'Satellite catalog number' },
        { text: 'U', tooltip: 'Classification (U for unclassified)' },
        { text: '98067A', tooltip: 'International Designator (launch year, launch number, piece of launch)' },
        { text: '21361.90679491', tooltip: 'Epoch (last two digits of year and day of the year with fractional days)' },
        { text: '.00001338', tooltip: 'First time derivative of the mean motion (change in mean motion per day)' },
        { text: '00000+0', tooltip: 'Second time derivative of the mean motion (decimal assumed)' },
        { text: '62572-4', tooltip: 'BSTAR drag term (decimal assumed)' },
        { text: '0', tooltip: 'Ephemeris type (0 for SGP4 model)' },
        { text: '9999', tooltip: 'Element set number (incremented for updated TLE)' }
    ];

  const tle2_parts = [
        { text: '2', tooltip: 'Line number (1 or 2)' },
        { text: '25544', tooltip: 'Satellite catalog number' },
        { text: '51.6469', tooltip: 'Inclination (degrees)' },
        { text: '358.2030', tooltip: 'Right ascension of the ascending node (degrees)' },
        { text: '0008411', tooltip: 'Eccentricity (decimal assumed)' },
        { text: '329.4627', tooltip: 'Argument of perigee (degrees)' },
        { text: '30.6574', tooltip: 'Mean anomaly (degrees)' },
        { text: '15.50067766', tooltip: 'Mean motion (revolutions per day)' },
        { text: '358954', tooltip: 'Revolution number at epoch (revolutions)' }
    ];

  return (
    <div className="App">
      <div className="tle-container">
        <TLELine parts={tle1_parts} />
        <TLELine parts={tle2_parts} />
      </div>
    </div>
  );
};

export default App;
