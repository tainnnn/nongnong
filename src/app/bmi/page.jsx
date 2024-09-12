'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const BMI = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    if (weight && height) {
      const weightInKg = parseFloat(weight);
      const heightInMeters = parseFloat(height) / 100;
      const bmiValue = weightInKg / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));

      if (bmiValue < 18.5) setCategory('Underweight');
      else if (bmiValue >= 18.5 && bmiValue < 24.9) setCategory('Normal weight');
      else if (bmiValue >= 25 && bmiValue < 29.9) setCategory('Overweight');
      else setCategory('Obesity');
    } else {
      setBmi(null);
      setCategory('');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">BMI Calculator</h1>
        <div className="mb-4">
          <label htmlFor="weight" className="block text-sm font-medium text-gray-700">Weight (kg)</label>
          <input
            id="weight"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            placeholder="Enter weight in kg"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="height" className="block text-sm font-medium text-gray-700">Height (cm)</label>
          <input
            id="height"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            placeholder="Enter height in cm"
          />
        </div>
        <button
          onClick={calculateBMI}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Calculate BMI
        </button>
        {bmi && (
          <div className="mt-4">
            <p className="text-lg font-semibold">Your BMI: {bmi}</p>
            <p className="text-md text-gray-600">Category: {category}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BMI;
