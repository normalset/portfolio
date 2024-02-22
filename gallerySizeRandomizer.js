document.addEventListener("DOMContentLoaded", function () {
  const imageLinks = [
    "https://media.discordapp.net/attachments/891255475054710795/1210340181891092530/c4d905bfa423d530.jpg?ex=65ea3422&is=65d7bf22&hm=1b1f9ec1f714d8c4f1a98a19f09e04c3f8a9a42fbad52b9bab6b46bdced153f8&=&format=webp&width=670&height=670",
    "https://media.discordapp.net/attachments/891255475054710795/1210339941532307507/Code.jpg?ex=65ea33e9&is=65d7bee9&hm=3ef622ffc189402d3fc12f79e8ff68d9f8edd0e918f1c8269e805c71cdaf88b3&=&format=webp&width=670&height=670",
    "https://media.discordapp.net/attachments/891255475054710795/1210339750662111303/Insanophobia_.jpg?ex=65ea33bb&is=65d7bebb&hm=2c0bb64677a5c6f95cf74bbb1ec9175896ccae9be1ad4da0d7c6a83fbcd0ffa1&=&format=webp&width=670&height=670",
    "https://media.discordapp.net/attachments/891255475054710795/1210339678499115008/Impressione_Sole_Riflesso.jpg?ex=65ea33aa&is=65d7beaa&hm=a2be37eb17d01d24437e6ff295e478f655270f5a3f09c2dfc9e234c170f98825&=&format=webp&width=670&height=670",
    "https://media.discordapp.net/attachments/891255475054710795/1210339155549225103/Opera_senza_titolo.jpg?ex=65ea332d&is=65d7be2d&hm=c6070ea415d3b1d8cd4b604aac127de19fff8efd567b0bbceee35fa607e95532&=&format=webp&width=670&height=670",
    "https://media.discordapp.net/attachments/891255475054710795/1210339075630825563/Opera_senza_titolo.jpg?ex=65ea331a&is=65d7be1a&hm=21a8e5dbaa93370cade2adfed218215476cc791a0cb58477481f913d5e7a9659&=&format=webp&width=670&height=670",
    "https://media.discordapp.net/attachments/891255475054710795/1210338989689802832/The_Magician.jpg?ex=65ea3306&is=65d7be06&hm=12dc68421759aa6bdf89ee70a195ab307b7c55245b06a998b536a4059bc1675f&=&format=webp&width=670&height=670",
    "https://media.discordapp.net/attachments/891255475054710795/1210338835364323379/Opera_senza_titolo.jpg?ex=65ea32e1&is=65d7bde1&hm=1b635d43c1ed7c1744bbed5b10a20e2c2f196b6c2df53d9ce07dfbf489869789&=&format=webp&width=670&height=670"
  ]; // Array variable containing links to images

  const gallery = document.querySelector('.main_gallery');

  imageLinks.forEach((link, index) => {
    const photoDiv = document.createElement('div');
    photoDiv.classList.add('photo');

    if (Math.random() < 0.33) {
      photoDiv.classList.add('large');
    } else {
      photoDiv.classList.add('small');
    }

    photoDiv.style.backgroundImage = `url('${link}')`;
    gallery.appendChild(photoDiv);
  });
});
