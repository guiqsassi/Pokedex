import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Pokemon from './context/context';
import { PokemonProvider } from './context/context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PokemonProvider>
       <App />
    </PokemonProvider>
  </React.StrictMode>,
    document.getElementById('root')

);

