import React, { useState } from 'react';
import _ from 'lodash';
import logo from './logo.svg';
import './App.css';

const NAMES = [
  'John',
  'James',
  'Pooh',
  'Wanee',
  'Lloyd',
];

const COLORS = [
  'lightblue',
  'lightcoral',
  'lightpink',
  'lightseagreen',
  'lightsteelblue',
];

function App() {
  const [name, setName] = useState(NAMES[0]);
  const [bgColor, setBgColor] = useState(COLORS[0]);

  return (
    <div className="Wrapper">
      <div
        className="NameWrapper"
        style={{ backgroundColor: bgColor }}
      >
        <h1>Hello, <span style={{ fontWeight: 'bold' }}>{name}</span>!</h1>
      </div>

      <div className="ButtonWrapper">
        <button
          // () => { ... }
          onClick={() => setName(NAMES[_.random(0, NAMES.length - 1)])}
        >
          Change Name!
        </button>
      </div>
    </div>
  );
}

export default App;
