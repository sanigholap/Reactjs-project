import React, { useState } from 'react';
import './App.css';  // Import the CSS file

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main">
      <h1 className="title">Hello, World!</h1>
      <div>
        <button className="button" onClick={() => setCount((count) => count + 1)}>
          count {count}
        </button>
      </div>
    </div>
  );
}
export default App;