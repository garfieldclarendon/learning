import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './Routes'
import { HashRouter } from 'react-router-dom'


ReactDOM.render(
  <main>
    <div className={`fade fade-${status}`}>
      <HashRouter>
        <Routes />
      </HashRouter>
    </div>
  </main>,
  document.getElementById('root')
);
