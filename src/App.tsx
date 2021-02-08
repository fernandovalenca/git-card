import React, { FunctionComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Routes } from './routes';

import GlobalStyle from './styles/global';

export const App: FunctionComponent = () => {
  return (
    < >
      <GlobalStyle />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  )
}