//É o primeiro arquivo aberto pela aplicação.
//E a partir daqui que toda a aplicação é iniciada

import React from 'react';
//O React é necessário sempre que a gente for usar o JSX
//O JSX só funciona se o React for importado.
import ReactDOM from 'react-dom';
//É utilizado na função .render()
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render( //Essa função só é utilizada uma unica vez em toda a aplicação
  //Ela pega o componente importanto App.js coloca ele em uma div html root.
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
