import Annex from './annex.js';
import AppEx from './appex.js';

import pokemonList from './list.js';
import pokemonView from './view.js';

const routes = {
  [Annex.baseURL()]: pokemonList,
  [Annex.baseURL() + 'pokemon/:id']: pokemonView
},

Index = () => {
  AppEx(routes);
};

export default Index;