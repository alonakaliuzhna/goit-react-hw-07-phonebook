import React from 'react';
import {store}from './redux/store';
import { Provider } from 'react-redux'
import {GlobalStyle} from  './index.styled.js';
import App from './App';
import {createRoot} from 'react-dom/client';

const container= document.getElementById('root')
const root= createRoot(container)


root.render(
  <React.StrictMode>
    <GlobalStyle />
   <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,

);
