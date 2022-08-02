import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'pages/App';
import globalStyles from 'styles/global';
import { Sprite } from 'components/icons/Sprite';
import { RecoilRoot } from 'recoil';

globalStyles();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<RecoilRoot>
		<Sprite />
		<App />
	</RecoilRoot>
);