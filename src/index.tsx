import './index.css';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router';
import Router from './Router';

const root = createRoot(document.getElementById('root'));

root.render(
  <HashRouter>
    <Router />
  </HashRouter>
);
