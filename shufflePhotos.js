window.addEventListener('load', function () {
  // Get the gallery container
  const gallery = document.getElementById('photo-gallery');

  // Get an array of all the images
  const images = Array.from(gallery.querySelectorAll('img'));

  // Randomly shuffle the images
  shuffleArray(images);

  // Clear the gallery
  gallery.innerHTML = '';

  // Append the shuffled images back to the gallery
  images.forEach(image => gallery.appendChild(image));
});

// Function to shuffle an array randomly
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}