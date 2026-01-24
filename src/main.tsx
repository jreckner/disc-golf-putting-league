import React from 'react';
import { BrowserRouter } from 'react-router';

import ReactDOM from 'react-dom/client';

import { Providers } from './providers';

import './index.css';

import './i18n';
import Lockr from 'lockr';

const App = React.lazy(() => import('./App'));

Lockr.prefix = 'dgpl_';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers>
        <App />
      </Providers>
    </BrowserRouter>
  </React.StrictMode>,
);
