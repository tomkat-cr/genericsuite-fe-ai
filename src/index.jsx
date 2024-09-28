import React from 'react';
import { HashRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import { App } from './lib/components/App/App.jsx';

import { HomePage } from './lib/components/HomePage/HomePage.jsx';
import { AboutBody } from './lib/components/About/About.jsx';

const componentMap = {
    "AboutBody": AboutBody,
    "HomePage": HomePage,
};

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <HashRouter> */}
      <App
        componentMap={componentMap}
      />
    {/* </HashRouter> */}
  </React.StrictMode>
);
