const Annex = {

  baseURL: () => {
    return window.location.pathname;
  },

  jsonData: async (url) => {
    let response = await fetch(url);
    if (response.status == 200) {
      let json = await response.json();
      //console.log(json);
      return json;
    }
    throw new Error(response.data)
  },

  routeURL: (route) => {
    let 
      path = route + '',
      part = path.split('/'),
      request = {resource: null, id: null}
    ;
    request.resource = part[2];
    request.id = part[3];
    return request;
  }

};

export default Annex;
