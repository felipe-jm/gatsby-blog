import 'lazysizes';

import 'prismjs/themes/prism-tomorrow.css';

import React from 'react';
import ReactDOM from 'react-dom';

import SWUpdater from './src/components/SWUpdater';

import wrapWithContext from './wrap-with-context';

export const wrapRootElement = wrapWithContext;

export const onServiceWorkerUpdateReady = () => {
  const root = document.createElement('div');
  document.body.appendChild(root);

  ReactDOM.render(<SWUpdater />, root);
};
