import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from 'pages/Home';
import globalStyles from 'styles/global';
import { Sprite } from 'components/icons/Sprite';
import { RecoilRoot } from 'recoil';

globalStyles();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<RecoilRoot>
		<Sprite />
		<Home />
	</RecoilRoot>
);