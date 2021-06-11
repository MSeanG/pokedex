const Codex = (elements, parent) => {
  /* elements passed must be in an array [], this includes a single element */

  const
    frgmnt = document.createDocumentFragment(),
    foster = document.createElement('div')
  ;

  elements.forEach(element => {
    foster.innerHTML = element;

    while (foster.firstChild) {
      if (parent) {
        frgmnt.appendChild(foster.firstChild);
        parent.appendChild(frgmnt);
      } else {
        frgmnt.appendChild(foster.firstChild)
      }
    }
  });

  return frgmnt;

}

export default Codex;
