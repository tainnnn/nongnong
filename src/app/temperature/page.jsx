'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const TemperatureConverter = () => {
  const [celcius, setCelcius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');
  const [kelvin, setKelvin] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let tempValue = parseFloat(value);

    if (isNaN(tempValue)) {
      setCelcius('');
      setFahrenheit('');
      setKelvin('');
      return;
    }

    switch (name) {
      case 'celcius':
        setCelcius(value);
        setFahrenheit((tempValue * 1.8 + 32).toFixed(2));
        setKelvin((tempValue + 273).toFixed(2));
        break;
      case 'fahrenheit':
        setFahrenheit(value);
        setCelcius(((tempValue - 32) / 1.8).toFixed(2));
        setKelvin((((tempValue - 32) / 1.8) + 273).toFixed(2));
        break;
      case 'kelvin':
        setKelvin(value);
        setCelcius((tempValue - 273).toFixed(2));
        setFahrenheit(((tempValue - 273) * 1.8 + 32).toFixed(2));
        break;
      default:
        break;
    }
  };

  return (
    <div className="bg-gray-300 min-h-screen">
      <Navbar />
      <div className="container mx-auto w-fit px-10 py-16 mt-32 bg-gray-500 rounded-2xl">
        <div className="bg-gray-400 rounded-md w-fit mx-auto mb-4">
          <h1 className="text-2xl font-bold text-center text-gray-800 px-6 py-3">
            Temperature Converter
          </h1>
        </div>

        <div className="mb-4 flex justify-center">
          <input
            id="celcius"
            name="celcius"
            type="number"
            value={celcius}
            onChange={handleInputChange}
            className="mt-1 block w-60 border border-gray-300 rounded-md p-2"
            placeholder="Enter temperature in Celcius"
          />
        </div>

        <div className="mb-4 flex justify-center">
          <input
            id="fahrenheit"
            name="fahrenheit"
            type="number"
            value={fahrenheit}
            onChange={handleInputChange}
            className="mt-1 block w-60 border border-gray-300 rounded-md p-2"
            placeholder="Enter temperature in Fahrenheit"
          />
        </div>

        <div className="mb-4 flex justify-center">
          <input
            id="kelvin"
            name="kelvin"
            type="number"
            value={kelvin}
            onChange={handleInputChange}
            className="mt-1 block w-60 border border-gray-300 rounded-md p-2"
            placeholder="Enter temperature in Kelvin"
          />
        </div>
      </div>
    </div>
  );
};

export default TemperatureConverter;