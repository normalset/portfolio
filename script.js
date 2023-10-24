const centeredText1 = document.getElementById("centeredText1");
const centeredText2 = document.getElementById("centeredText2");

let translateY1 = 0;
let translateY2 = 0;

// Function to update the transform property for vertical translation
function updateTransform(element, translateY) {
  element.style.transform = `translateY(${translateY}px)`;
}

// Add a wheel event listener to move the text vertically
centeredText1.addEventListener("wheel", (event) => {
  if (event.deltaY > 0) {
    // Scrolling down
    translateY1 += 30; // Adjust the scroll speed as needed
  } else {
    // Scrolling up
    translateY1 -= 30;
  }

  // Ensure the text stays within the container bounds
  const containerHeight = centeredText1.parentElement.clientHeight;
  const textHeight = centeredText1.clientHeight;

  translateY1 = Math.min(0, Math.max(-textHeight + containerHeight, translateY1));

  updateTransform(centeredText1, translateY1);

  // Prevent the default behavior of the wheel event
  event.preventDefault();
});

centeredText2.addEventListener("wheel", (event) => {
  if (event.deltaY > 0) {
    // Scrolling down
    translateY2 += 30; // Adjust the scroll speed as needed
  } else {
    // Scrolling up
    translateY2 -= 30;
  }

  // Ensure the text stays within the container bounds
  const containerHeight = centeredText2.parentElement.clientHeight;
  const textHeight = centeredText2.clientHeight;

  translateY2 = Math.min(0, Math.max(-textHeight + containerHeight, translateY2));

  updateTransform(centeredText2, translateY2);

  // Prevent the default behavior of the wheel event
  event.preventDefault();
});