"use client"

import { useState } from 'react';

const charMap = {
  // ไทยเป็นอังกฤษ
  'ๅ': '1', '/': '2', '-': '3', 'ภ': '4', 'ถ': '5', 'ุ': '6', 'ึ': '7', 'ค': '8', 'ต': '9', 'จ': '0',
  'ข': '-', 'ช': '=',
  'ๆ': 'q', 'ไ': 'w', 'ำ': 'e', 'พ': 'r', 'ะ': 't', 'ั': 'y', 'ี': 'u', 'ร': 'i', 'น': 'o', 'ย': 'p',
  'บ': '[', 'ล': ']', 'ฃ': '\\',
  'ฟ': 'a', 'ห': 's', 'ก': 'd', 'ด': 'f', 'เ': 'g', '้': 'h', '่': 'j', 'า': 'k', 'ส': 'l', 'ว': ';', 'ง': "'",
  'ผ': 'z', 'ป': 'x', 'แ': 'c', 'อ': 'v', 'ิ': 'b', 'ื': 'n', 'ท': 'm', 'ม': ',', 'ใ': '.', 'ฝ': '/',
  
  // Shift (ไทยเป็นอังกฤษ)
  '+': '!', '๑': '@', '๒': '#', '๓': '$', '๔': '%', 'ู': '^', '฿': '&', '๕': '*', '๖': '(', '๗': ')',
  '๘': '_', '๙': '+',
  '๐': 'Q', '"': 'W', 'ฎ': 'E', 'ฑ': 'R', 'ธ': 'T', 'ํ': 'Y', '๊': 'U', 'ณ': 'I', 'ฯ': 'O', 'ญ': 'P',
  'ฐ': '{', ',': '}', 'ฅ': '|',
  'ฤ': 'A', 'ฆ': 'S', 'ฏ': 'D', 'โ': 'F', 'ฌ': 'G', '็': 'H', '๋': 'J', 'ษ': 'K', 'ศ': 'L', 'ซ': ':', '.': '"',
  '(': 'Z', ')': 'X', 'ฉ': 'C', 'ฮ': 'V', 'ฺ': 'B', '์': 'N', '?': 'M',
  'ฒ': '<', 'ฬ': '>', 'ฦ': '?',

  // อังกฤษเป็นไทย
  '1': 'ๅ', '2': '/', '3': '-', '4': 'ภ', '5': 'ถ', '6': 'ุ', '7': 'ึ', '8': 'ค', '9': 'ต', '0': 'จ',
  '-': 'ข', '=': 'ช',
  'q': 'ๆ', 'w': 'ไ', 'e': 'ำ', 'r': 'พ', 't': 'ะ', 'y': 'ั', 'u': 'ี', 'i': 'ร', 'o': 'น', 'p': 'ย',
  '[': 'บ', ']': 'ล', '\\': 'ฃ',
  'a': 'ฟ', 's': 'ห', 'd': 'ก', 'f': 'ด', 'g': 'เ', 'h': '้', 'j': '่', 'k': 'า', 'l': 'ส', ';': 'ว', "'": 'ง',
  'z': 'ผ', 'x': 'ป', 'c': 'แ', 'v': 'อ', 'b': 'ิ', 'n': 'ื', 'm': 'ท', ',': 'ม', '.': 'ใ', '/': 'ฝ',
  
  // Shift (อังกฤษเป็นไทย)
  '!': '+', '@': '๑', '#': '๒', '$': '๓', '%': '๔', '^': 'ู', '&': '฿', '*': '๕', '(': '๖', ')': '๗',
  '_': '๘', '+': '๙',
  'Q': '๐', 'W': '"', 'E': 'ฎ', 'R': 'ฑ', 'T': 'ธ', 'Y': 'ํ', 'U': '๊', 'I': 'ณ', 'O': 'ฯ', 'P': 'ญ',
  '{': 'ฐ', '}': ',', '|': 'ฅ',
  'A': 'ฤ', 'S': 'ฆ', 'D': 'ฏ', 'F': 'โ', 'G': 'ฌ', 'H': '็', 'J': '๋', 'K': 'ษ', 'L': 'ศ', ':': 'ซ', '"': '.',
  'Z': '(', 'X': ')', 'C': 'ฉ', 'V': 'ฮ', 'B': 'ฺ', 'N': '์', 'M': '?',
  '<': 'ฒ', '>': 'ฬ', '?': 'ฦ',

  // ✅ 
  ' ': ' '
};

const convertText = (text, shift) => {
  let converted = '';
  if (/[\u0E00-\u0E7F]/.test(text)) {
    for (const char of text) {
      converted += shift
        ? charMap[char] || ''
        : charMap[char] || '';
    }
  } else if (/[\u0000-\u007F]/.test(text)) {
    for (const char of text) {
      converted += shift
        ? charMap[char] || ''
        : charMap[char] || '';
    }
  }
  return converted || 'Invalid input';
};

export default function Home() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [isShift, setIsShift] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    setOutput(convertText(value, isShift));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Shift') {
      setIsShift(true);
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === 'Shift') {
      setIsShift(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-6 bg-gray-300">
      <h1 className="text-2xl font-bold text-gray-300 mb-4 bg-gray-500 rounded-md p-3">คีย์บอร์ดย้อนกลับ</h1>
      <textarea
        className="border border-gray-300 rounded-lg p-3 w-full max-w-md h-40 bg-white text-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={input}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        placeholder="กรุณาใส่ข้อความภาษาไทยหรือภาษาอังกฤษที่นี่..."
      />
      <div className="mt-4 p-4 border border-gray-300 rounded-lg w-full max-w-md bg-white text-gray-800 shadow-md whitespace-pre-wrap break-words">
        {output}
      </div>
    </div>
  );
}
