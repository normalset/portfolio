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
    "./media/drawings/1.jpg" , 
    "./media/drawings/2.jpg" , 
    "./media/drawings/3.jpg", 
    "./media/drawings/4.jpg", 
    "./media/drawings/5.jpg", 
    "./media/drawings/6.jpg", 
    "./media/drawings/7.jpg", 
    "./media/drawings/8.jpg", 
    "./media/drawings/11.jpg", 
    "./media/drawings/gif.gif", 
    "./media/drawings/10.jpg", 
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
    "./media/drawings/9.jpg", 
    "./media/drawings/12.jpg", 
    "./media/drawings/13.jpg", 
    "./media/drawings/14.jpg", 
    "./media/drawings/15.jpg", 
    "./media/drawings/16.jpg", 
    "./media/drawings/17.png", 
  ]; // Array variable containing links to images

  const gallery = document.querySelector('.color_gallery');

  add_first_2_photos(gallery, imageLinks)

  //add button at the end 
  setTimeout(() => {
    gallery.appendChild(create_button_color(gallery, "V", imageLinks));
  }, 2 * 100 + 10);
});
