import Annex from './annex.js';
import Error404 from './error-404.js';

const AppEx = (paths) => {

  const
    routes = paths,

    display = async (target) => {
      let request = Annex.routeURL(target);
      let parsedURL = (request.resource ? '/pokedex/' + request.resource : '/pokedex/') + (request.id ? '/:id' : '');
      let page = routes[parsedURL] ? routes[parsedURL] : Error404;
      await page.render();
      await page.callback();
    },

    route = (path) => {
      if(path) {
        window.history.pushState({}, path, window.location.origin + path);
        display(path)
      }
      else {
        display(window.location.pathname);
      }
    },

    handle = () => {
      document.body.addEventListener('click', event => {
        
        // prevent fetch on clicks that aren't relevant
        try{
          if (
            event.target.getAttribute('data-route') ||
            event.target.parentNode.getAttribute('data-route') ||
            event.target.parentNode.parentNode.getAttribute('data-route')
          ) {
            // event bubbling
            route(
              event.target.getAttribute('data-route') ||
              event.target.parentNode.getAttribute('data-route') ||
              event.target.parentNode.parentNode.getAttribute('data-route')
            )
          } else {
            return
          }
        } catch(e) {
          if(e) {
            //console.log(e);
            return
          }
        }
      })
    }
  ;

  window.addEventListener('load', route(), false);
  window.onpopstate = () => route();
  document.addEventListener('DOMContentLoaded', handle(), false);
};

export default AppEx;
