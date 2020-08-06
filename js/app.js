import { arrayImagesOne, arrayImagesTwo } from './arrays.js';

const displayOne = document.querySelector('.display-one');
const images = document.querySelectorAll('.miniature.image');

const displayTwo = document.querySelector('.display-two');
const pictures = document.querySelectorAll('.miniature.picture');


let counter = 0;

let interval = setInterval(() => {
  console.log(counter);
  if (counter < arrayImagesOne.length) {
    displayOne.style.backgroundImage = arrayImagesOne[counter];
    images[counter].style.borderStyle = 'solid';
    if (counter >= 1) {
      counter--;
      images[counter].style.borderStyle = 'none';
      counter++;
    }
    counter++;
  } else {
    counter--;
    images[counter].style.borderStyle = 'none';
    counter++;
    clearInterval(interval);
  }
}, 1000);

let counterTwo = 0;
setTimeout(() => {
  let intervalTwo = setInterval(() => {
    console.log(counterTwo);
    if (counterTwo < arrayImagesTwo.length) {
      displayTwo.style.backgroundImage = arrayImagesTwo[counterTwo];
      pictures[counterTwo].style.borderStyle = 'solid';
      if (counterTwo >= 1) {
        counterTwo--;
        pictures[counterTwo].style.borderStyle = 'none';
        counterTwo++;
      }
      counterTwo++;
    } else {
      counterTwo--;
      pictures[counterTwo].style.borderStyle = 'none';
      counterTwo++;
      counterTwo = 0;
      clearInterval(intervalTwo);
    }
  }, 1000);
}, 16500);







