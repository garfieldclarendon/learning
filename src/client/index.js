import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './Routes'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.render(
  <main>
    <div className={`fade fade-${status}`}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  </main>,
  document.getElementById('root')
);
