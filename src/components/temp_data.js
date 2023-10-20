import React, { useState, useEffect } from 'react';

const TemperatureDisplay = () => {
  const [temperature, setTemperature] = useState(null);


  const fetchTemperatureData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/fetch_latest_data/');
      const data = await response.json();
      console.log(data.data[0],'======================')
      setTemperature(data.data[0].temp);
    } catch (error) {
      console.error('Error fetching temperature data:', error);
    }
  };

  useEffect(() => {
    fetchTemperatureData();
    const intervalId = setInterval(fetchTemperatureData, 60000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h2>Latest Temperature</h2>
      <p>{temperature != null ? `${temperature} °C` : 'Loading...'}</p>
    </div>
  );
};

export default TemperatureDisplay;
