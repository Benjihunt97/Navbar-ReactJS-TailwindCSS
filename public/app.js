import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../components/Navbar.js';

const App = () => {
  return (
    <div>
      <Navbar />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('react-app')
);
