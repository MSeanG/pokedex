import Annex from './annex.js';
import listItem from './list-item.js';
import Codex from './codex.js';

const fetchPokemonList = async () => {
  try {
    const data = await Annex.jsonData('https://pokeapi.co/api/v2/pokemon?limit=151');
    //const data = await Annex.jsonData('https://pokeapi.co/api/v2/pokemon?limit=898');
    return data;
  } catch (err) {
    console.log('Error fetching Pokemon List data ' + err);
  }
},

pokemonList = {

  callback: async () => {
    return;
  },

  render: async () => {
    let items = '';
    const 
      list = await fetchPokemonList(),
      main = document.querySelector('main')
    ;

    main.dataset.pokemonCount = list.results.length;
    main.innerHTML = '';

    list.results.forEach((result, index) => {
      const
        name = result.name,
        id = index + 1,
        image =  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
        li = listItem(name, id, image)
      ;
      return items += li;
    });
    Codex([/*html*/`
      <h2 style="text-align: center">Pok&eacute;dex</h2>
      <p style="text-align: center">Click on a Pokemon for more details.</p>
      <nav>
        <ul data-count="${list.results.length}">
          ${items}
        </ul>
      </nav>
    `], main)
  }

};

export default pokemonList;
