import React from 'react';
import ReactDOM from 'react-dom/client';
import { GameDataProvider } from './gameDataContext/GameDataContext';

import './index.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    < GameDataProvider >
        <App />
    </GameDataProvider >
);
