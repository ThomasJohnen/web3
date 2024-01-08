import React from 'react';
import ReactDOM from 'react-dom';
import AppLoader from 'components/AppLoader';

import 'index.css'



ReactDOM.render(
  <AppLoader />,
  document.getElementById('root')
);

//npm install --save postcss-safe-parser erreur instalation
//export NODE_OPTIONS=--openssl-legacy-provider pour résoudre le prob