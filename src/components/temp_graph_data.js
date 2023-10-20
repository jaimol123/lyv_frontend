import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import TemperatureDisplay from './temp_data';


const TempGraphData = () => {
  
    const [data, setData] = useState('');
    

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://127.0.0.1:8000/fetch_temp_data/');  

            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const result = await response.json();
            setData(result);
          } catch (error) {
            console.log(error)
          }
        };
        fetchData();
      }, []);
      
    return (
    <div>
      <h1>DashBoard</h1>
      <h3>Graph for Temperature</h3>
      <LineChart width={400} height={300} data={data.data}>
        <XAxis dataKey="time" />
        <YAxis />
        <CartesianGrid stroke="#ccc" />
        <Line type="monotone" dataKey="temp" stroke="#8884d8" />
        <Tooltip />
        <Legend />
      </LineChart>
     <TemperatureDisplay />
    </div>
  );
};

export default TempGraphData;
