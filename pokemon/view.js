import Annex from './annex.js';
import Codex from './codex.js';
import listSprites from './list-sprites.js';
import carousel from './carousel.js';

const
  fetchPokemon = async (id) => {
    try {
      const data = await Annex.jsonData(`https://pokeapi.co/api/v2/pokemon/${id}`);
      return data;
    } catch (err) {
      console.log('Error fetching Pokemon', err);
    }
  },

  show = (id, count) => {
    if (id > count) {
      return id = 1
    } else if (id < 1) {
      return id = count
    } else {
      return id
    }
  },

  pokemonView = {
  
    callback: async () => {
      carousel();
    },
  
    render: async () => {

      let types = '';

      const 
        request = Annex.routeURL(location.pathname),
        reqId = parseInt(request.id, 10),
        pokemon = await fetchPokemon(reqId),
        exhibit = pokemon.sprites,
        main = document.querySelector('main'),
        count = main.dataset.pokemonCount,
        prev = show(reqId - 1, count),
        next = show(reqId + 1, count)
      ;

      pokemon.types.forEach(item => {
        return types += `<li class="type ${item.type.name}">${item.type.name}</li>`;
      })

      main.innerHTML = '';

      Codex([/*html*/`
        <section>
          <nav>
            <div>
              <button class="nav-btn" data-route="/pokedex/pokemon/${prev}">
                <div><span>&#8249;</span> Prev</div>
                <div style="font-size: 1.5rem">${prev}</div>
              </button>
            </div>
            <div>
              <button class="nav-btn" data-route="/pokedex" style="width: 6.75rem">
                <div>Back to</div>
                <div style="font-size: 1.5rem;">Pok&eacute;dex</div>
              </button>
            </div>
            <div>
              <button class="nav-btn" data-route="/pokedex/pokemon/${next}">
                <div>Next <span>&#8250;</span></div>
                <div style="font-size: 1.5rem">${next}</div>
                <div></div>
            </div>
          </nav>
          <article>
            <div>
              <h3>${pokemon.name} ${pokemon.id}</h3>
              <ul class="sprites slider">
                <div class="button-prev"><span class="text-shadow">&#10094;</span></div>
                <div class="button-next"><span class="text-shadow">&#10095;</span></div>
                ${listSprites(exhibit)}
              </ul>

              <div class="dotnav" style="text-align: center"></div>

              <ul class="types">${types}</ul>

            </div>
          </article>
        </section>
      `], main)
    }
  }
;

export default pokemonView;
