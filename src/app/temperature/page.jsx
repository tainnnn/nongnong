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
    <div className='bg-gray-100'>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Temperature Converter</h1>
        <div className="mb-4">
          <label htmlFor="celcius" className="block text-sm font-medium text-gray-700">Celcius</label>
          <input
            id="celcius"
            name="celcius"
            type="number"
            value={celcius}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            placeholder="Enter temperature in Celcius"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="fahrenheit" className="block text-sm font-medium text-gray-700">Fahrenheit</label>
          <input
            id="fahrenheit"
            name="fahrenheit"
            type="number"
            value={fahrenheit}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            placeholder="Enter temperature in Fahrenheit"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="kelvin" className="block text-sm font-medium text-gray-700">Kelvin</label>
          <input
            id="kelvin"
            name="kelvin"
            type="number"
            value={kelvin}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            placeholder="Enter temperature in Kelvin"
          />
        </div>
      </div>
    </div>
  );
};

export default TemperatureConverter;