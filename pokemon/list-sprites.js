const spriteItem = (url, txt) => {
  return `
    <li class="slide">
      <figure class="sprite">
        <img src="${url}" alt="${txt}">
        <figcaption>${txt}</figcaption>
      </figure>
    </li>
  `
  ;
},

listSprites = (images) => {

  let sprites = '';

  if (images.front_default !== null) {
    sprites += spriteItem(images.front_default, 'front default')
  }
  if (images.back_default !== null) {
    sprites += spriteItem(images.back_default,'back default');
  }

  if (images.front_female !== null) {
    sprites += spriteItem(images.front_female,'front female');
  }
  if (images.back_female !== null) {
    sprites += spriteItem(images.back_female,'back female');
  }

  if (images.front_shiny !== null) {
    sprites += spriteItem(images.front_shiny,'front shiny');
  }
  if (images.back_shiny !== null) {
    sprites += spriteItem(images.back_shiny,'back shiny');
  }

  if (images.front_shiny_female !== null) {
    sprites += spriteItem(images.front_shiny_female,'front shiny female');
  }
  if (images.back_shiny_female !== null) {
    sprites += spriteItem(images.back_shiny_female,'back shiny female');
  }

  //const imgs = Object.entries(images);
  //imgs.forEach((img, index) => {
  //  console.log(img, index);
  //  if (img[0] === 'other' || img[0] === 'versions') {
  //    return
  //  }
  //  if (img[1] !== null) {
  //    sprites += `
  //      <li id="${img[0]}" class="sprite slide">
  //        <figure>
  //          <img src="${img[1]}" alt="${img[0]}">
  //          <figcaption>${img[0]}</figcaption>
  //        </figure>
  //      </li>`
  //    ;
  //  }
  //})

return sprites;
}

export default listSprites;
