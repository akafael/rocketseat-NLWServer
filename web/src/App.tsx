/**
 * Root Component
 */

import React from 'react'; // Required

// Import from project
import './assets/styles/global.css';
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
