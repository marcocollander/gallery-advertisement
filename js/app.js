'use strict';
const displayOne = document.querySelector('.display-one');
const images = document.querySelectorAll('.miniature.image');

const arrayImagesOne =
  [
    'url(images/display/picture-one.jpg)',
    'url(images/display/picture-two.jpg)',
    'url(images/display/picture-three.jpg)',
    'url(images/display/picture-four.jpg)',
    'url(images/display/picture-five.jpg)',
    'url(images/display/picture-six.jpg)',
    'url(images/display/picture-seven.jpg)',
    'url(images/display/picture-eight.jpg)',
    'url(images/display/picture-nine.jpg)',
    'url(images/display/picture-ten.jpg)',
    'url(images/display/picture-eleven.jpg)',
    'url(images/display/picture-twelve.jpg)',
    'url(images/display/picture-threeteen.jpg)',
    'url(images/display/picture-fourteen.jpg)',
    'url(images/display/picture-fifteen.jpg)',
    'url(images/display/picture-sixteen.jpg)'];

const displayTwo = document.querySelector('.display-two');
const pictures = document.querySelectorAll('.miniature.picture');

const arrayImagesTwo =
  [
    'url(images/display-two/picture-one.jpg)',
    'url(images/display-two/picture-two.jpg)',
    'url(images/display-two/picture-three.jpg)',
    'url(images/display-two/picture-four.jpg)',
    'url(images/display-two/picture-five.jpg)',
    'url(images/display-two/picture-six.jpg)',
    'url(images/display-two/picture-seven.jpg)',
    'url(images/display-two/picture-eight.jpg)',
    'url(images/display-two/picture-nine.jpg)',
    'url(images/display-two/picture-ten.jpg)',
    'url(images/display-two/picture-eleven.jpg)',
    'url(images/display-two/picture-twelve.jpg)',
    'url(images/display-two/picture-threeteen.jpg)',
    'url(images/display-two/picture-fourteen.jpg)',
    'url(images/display-two/picture-fifteen.jpg)',
    'url(images/display-two/picture-sixteen.jpg)'];



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







