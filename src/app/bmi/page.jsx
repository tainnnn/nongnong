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
    <div className="bg-gray-300 min-h-screen">
      <Navbar />
      <div className="container mx-auto w-fit px-10 py-16 mt-32 bg-gray-500 rounded-2xl">
        <div className="bg-gray-400  rounded-md w-fit mx-auto mb-4">
          <h1 className="text-2xl font-bold text-center text-gray-800 px-6 py-3">
           BMI Calculator
          </h1>
        </div>
        <div className="mb-4 flex justify-center">
          <input
            id="weight"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="mt-1 block w-60 border border-gray-300 rounded-md p-2"
            placeholder="Enter weight in kg"
          />
        </div>
        <div className="mb-4 flex justify-center">
          <input
            id="height"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="mt-2 mb-4 block w-60 border border-gray-300 rounded-md p-2"
            placeholder="Enter height in cm"
          />
        </div>
        <div className='mt-4 flex justify-center'>
          <button
          onClick={calculateBMI}
          className="bg-gray-400 text-gray-800 font-bold px-4 py-2 rounded-md"
        >
          Calculate BMI
        </button>
        </div>
        <div className='mt-4 flex justify-center rounded-md'>
          {bmi && (
          <div className="my-4 box-border rounded-md bg-gray-500 px-6 py-4 text-gray-900 shadow-md w-fit">
            <p className="text-lg text-gray-900 font-semibold">Your BMI: {bmi}</p>
            <p className="text-md text-gray-900 font-semibold">Category: {category}</p>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default BMI;