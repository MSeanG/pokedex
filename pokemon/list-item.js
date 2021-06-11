const listItem = (name, id, path) => {
  const li = /*html*/`
    <li data-route="/pokedex/pokemon/${id}">
      <figure>
        <img src="${path}" alt="pokemon number ${id} name ${name}">
      </figure>
      <h3>${id}. ${name}</h3>
    </li>
  `;
  return li;
}

export default listItem;
