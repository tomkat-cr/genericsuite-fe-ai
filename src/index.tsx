import React from 'react';
import { HashRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

// import { App } from 'genericsuite';
// import { App } from 'genericsuite/src/lib/components/App/App';
const gs = require("genericsuite");

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HashRouter>
      <gs.App />
    </HashRouter>
  </React.StrictMode>
);
