import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';

import { Sprite } from 'components/icons/Sprite';
import { Home } from 'pages/Home';

import globalStyles from 'styles/global';

globalStyles();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RecoilRoot>
    <Sprite />
    <Home />
  </RecoilRoot>,
);
