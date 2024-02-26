//helper functions
function add_first_2_photos(gallery, imageLinks){

  const transitionDuration = 0.5;

  for (index = 0; index < 2; index++) {
    const photoDiv = document.createElement('div')
    photoDiv.classList.add('photo');
    photoDiv.style.backgroundImage = `url('${imageLinks[index]}')`;
    photoDiv.addEventListener("click", () => {
      if (photoDiv.classList.contains("clicked_photo")) {
        photoDiv.classList.remove("clicked_photo");
      } else {
        photoDiv.classList.add("clicked_photo");
      }
    })

    photoDiv.style.opacity = '0';
    setTimeout(() => {
      photoDiv.style.opacity = '1';
      gallery.appendChild(photoDiv);
    }, index * transitionDuration * 100);

    gallery.appendChild(photoDiv);
  }
}

function add_all_photos(gallery , imageLinks){

  const transitionDuration = 0.5;

  imageLinks.forEach((link, index) => {
    const photoDiv = document.createElement('div');
    photoDiv.classList.add('photo');

    photoDiv.style.backgroundImage = `url('${link}')`;
    photoDiv.addEventListener("click", () => {
      if (photoDiv.classList.contains("clicked_photo")) {
        photoDiv.classList.remove("clicked_photo");
      } else {
        photoDiv.classList.add("clicked_photo");
      }
    })

    photoDiv.style.opacity = '0';
    setTimeout(() => {
      photoDiv.style.opacity = '1';
      gallery.appendChild(photoDiv);
    }, (index + 2) * transitionDuration * 100);

    gallery.appendChild(photoDiv);
  });
}

function create_button_bw(gallery , button_text, imageLinks){
  const button = document.createElement('button');
  button.classList.add('image_button');
  button.classList.add('bw_button');
  button.innerHTML = button_text;

  //add event listener to scroll to header up
  button.addEventListener('click', function () {
    if(gallery.classList.contains("collapsed")){
      const heading = document.getElementById('blackandwhite');
      heading.scrollIntoView({ behavior: 'smooth' });
    }
  });

  //add event listener to scroll to header down
  button.addEventListener('click', function () {
    if(! gallery.classList.contains("collapsed")){
      const heading = document.getElementById('color');
      heading.scrollIntoView({ behavior: 'smooth' }); 
    }
  });


  //event listener to collapse
  button.addEventListener("click", function () {
    if (gallery.classList.contains("collapsed")) {
      //remove collapsed
      gallery.classList.remove("collapsed")
      //clear div
      gallery.innerHTML = ""
      //add back le due immagini
      add_first_2_photos(gallery, imageLinks)
      //add button
      setTimeout(() => {
        gallery.appendChild(create_button_bw(gallery, "V", imageLinks));
      }, 2 * 100 + 10);

    } else {
      //add collapse
      gallery.classList.add("collapsed")
      //remove the 2 images added and the button 
      gallery.innerHTML = ""
      // add all the images back
      add_all_photos(gallery, imageLinks)
      //add button after delay
      setTimeout(() => {
        gallery.appendChild(create_button_bw(gallery, "Δ", imageLinks));
      }, imageLinks.length * 100+10);
    }
  })

  return button
}

function create_button_color(gallery, button_text, imageLinks) {
  const button = document.createElement('button');
  button.classList.add('image_button');
  button.classList.add('bw_button');
  button.innerHTML = button_text;

  //add event listener to scroll to header up
  button.addEventListener('click', function () {
    if (gallery.classList.contains("collapsed")) {
      const heading = document.getElementById('color');
      heading.scrollIntoView({ behavior: 'smooth' });
    }
  });

  // add event listener to scroll to header down
  button.addEventListener('click', function () {
    if (!gallery.classList.contains("collapsed")) {
      const heading = document.getElementById('commissions');
      heading.scrollIntoView({ behavior: 'smooth' });
    }
  });


  //event listener to collapse
  button.addEventListener("click", function () {
    if (gallery.classList.contains("collapsed")) {
      //remove collapsed
      gallery.classList.remove("collapsed")
      //clear div
      gallery.innerHTML = ""
      //add back le due immagini
      add_first_2_photos(gallery, imageLinks)
      //add button
      setTimeout(() => {
        gallery.appendChild(create_button_color(gallery, "V", imageLinks));
      }, 2 * 100 + 10);

    } else {
      //add collapse
      gallery.classList.add("collapsed")
      //remove the 2 images added and the button 
      gallery.innerHTML = ""
      // add all the images back
      add_all_photos(gallery, imageLinks)
      //add button after delay
      setTimeout(() => {
        gallery.appendChild(create_button_color(gallery, "Δ", imageLinks));
      }, imageLinks.length * 100 + 10);
    }
  })

  return button
}

// black and white photos
document.addEventListener("DOMContentLoaded", function () {
  const imageLinks = [
    "https://media.discordapp.net/attachments/1210641813732597820/1210642830662570034/Tarnished.jpg?ex=65eb4dff&is=65d8d8ff&hm=1832efc7c37f2ae6643998dec8313186402d0e8c3716c5c8e69772f18c46d6a8&=&format=webp&width=670&height=670",
    "https://media.discordapp.net/attachments/1210641813732597820/1210642248429994014/IMG_1873.jpg?ex=65eb4d74&is=65d8d874&hm=1708d94aa76be9b16e400df1b404e9ccb5deaa25dcc48a5687809cb13be49ee3&=&format=webp&width=670&height=670",
    "https://media.discordapp.net/attachments/1210641813732597820/1210642247666892921/IMG_1877.jpg?ex=65eb4d74&is=65d8d874&hm=8849ee4c6bd7ab987cbb37e0725fb16030d4dc3a4e7e72378925bb2fdc0d0ea9&=&format=webp&width=670&height=670",
    "https://media.discordapp.net/attachments/1210641813732597820/1210642247121641472/trim.B81B1246-334E-41CB-924F-4668F7984665.gif?ex=65eb4d74&is=65d8d874&hm=7571da7d7a0c294bdab71deb4b7fdee417edd244f874d284aea69c4db2e27bcb&=&width=431&height=431",
    "https://media.discordapp.net/attachments/1210641813732597820/1210642246446354482/IMG_2097.jpg?ex=65eb4d74&is=65d8d874&hm=23ad6a737e8deed6de0a1669fefce21032350d1fc71b235d7357f07775fe0d39&=&format=webp&width=670&height=670",
    "https://media.discordapp.net/attachments/1210641813732597820/1210642245359771698/IMG_2091.jpg?ex=65eb4d73&is=65d8d873&hm=ea20f57434eaeeeeadaca43611b1a7fefeb5562320216cfb90e20ee14bd146c5&=&format=webp&width=670&height=670",
    "https://media.discordapp.net/attachments/1210641813732597820/1210642244638482462/IMG_2092.jpg?ex=65eb4d73&is=65d8d873&hm=20c8b7b0aa78198225168fcf90c598cd9a41531041a3a2f4153da12daf311649&=&format=webp&width=670&height=670",
    "https://media.discordapp.net/attachments/1210641813732597820/1210642243405217822/IMG_3360.jpg?ex=65eb4d73&is=65d8d873&hm=85bcc94449f69ab144be9794df1f2f6f94066b476f491bcd337be0823ee7b170&=&format=webp&width=670&height=670",
    "https://media.discordapp.net/attachments/1210641813732597820/1210642243040575529/IMG_4383.jpg?ex=65eb4d73&is=65d8d873&hm=0b6cacc60aff1ce5c1203be2bda2ac55056f4623ff267ed012d65ef890cd071a&=&format=webp&width=670&height=670",
    "https://media.discordapp.net/attachments/891255475054710795/1210588435287646288/Sketches_Vari.jpg?ex=65eb1b56&is=65d8a656&hm=be2c6675bdad86dc3c289769d1f8c9b299614358caf8ee248ae08e5891b30ad2&=&format=webp&width=670&height=670",
    "https://media.discordapp.net/attachments/1210641813732597820/1210657228823076875/Opera_senza_titolo.png?ex=65eb5b68&is=65d8e668&hm=c5f4cd944907227980665f8075925ba3822f0f8f29e9698145f66de0a28e3afb&=&format=webp&quality=lossless&width=670&height=670"
  ]; // Array variable containing links to images

  const gallery = document.querySelector('.bw_gallery');

  add_first_2_photos(gallery, imageLinks)

  //add button at the end 
  setTimeout(() => {
    gallery.appendChild(create_button_bw(gallery, "V", imageLinks));
  }, 2 * 100+ 10);
});




//colore
document.addEventListener("DOMContentLoaded", function () {
  const imageLinks = [
    "https://media.discordapp.net/attachments/1210641813732597820/1210657579814879252/Insanophobia_.png?ex=65eb5bbb&is=65d8e6bb&hm=e3989ec82a940ab532cd61054ea29a9ae759b3017a6a6b433947316bc6fdf774&=&format=webp&quality=lossless&width=670&height=670",
    "https://media.discordapp.net/attachments/1210641813732597820/1210657578506387456/Code.png?ex=65eb5bbb&is=65d8e6bb&hm=9e7b26f04587647f17d718a8676d236524b8d2445bbdb5f6735d8630dde2e255&=&format=webp&quality=lossless&width=670&height=670",
    "https://media.discordapp.net/attachments/1210641813732597820/1210657582231064706/Opera_senza_titolo.png?ex=65eb5bbc&is=65d8e6bc&hm=6bea2aec33998a3fac87cc5908af30b43ff02674654d18af0843918eee99db10&=&format=webp&quality=lossless&width=670&height=670",
    "https://media.discordapp.net/attachments/1210641813732597820/1210657584571359313/The_Magician.png?ex=65eb5bbd&is=65d8e6bd&hm=199451aed4ccac60840b0586c9aced2b4ac4a1e59363688587c21f242bd93220&=&format=webp&quality=lossless&width=670&height=670",
    "https://media.discordapp.net/attachments/1210641813732597820/1210657599952003072/Opera_senza_titolo.png?ex=65eb5bc0&is=65d8e6c0&hm=7157124df1e14561da813cf93fc1b0ee80206459a76e86415a5baa2f33a9adda&=&format=webp&quality=lossless&width=670&height=670"
  ]; // Array variable containing links to images

  const gallery = document.querySelector('.color_gallery');

  add_first_2_photos(gallery, imageLinks)

  //add button at the end 
  setTimeout(() => {
    gallery.appendChild(create_button_color(gallery, "V", imageLinks));
  }, 2 * 100 + 10);
});
