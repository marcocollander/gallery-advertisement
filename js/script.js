'use strict';

const display = document.querySelector('.display');
const miniature = document.getElementsByClassName('miniature');

const arrayImages =
  [
    // 'url(images/display/miniature-one.jpg)',
    'url(images/display/miniature-one.jpg)',
    'url(images/display/miniature-two.jpg)',
    'url(images/display/miniature-three.jpg)',
    'url(images/display/miniature-four.jpg)',
    'url(images/display/miniature-five.jpg)',
    'url(images/display/miniature-six.jpg)',
    'url(images/display/miniature-seven.jpg)',
    'url(images/display/miniature-eight.jpg)',
    'url(images/display/ miniature-nine.jpg)',
    'url(images/display/miniature-ten.jpg)',
    'url(images/display/miniature-eleven.jpg)',
    'url(images/display/miniature-twelve.jpg)',
    'url(images/display/miniature-threeteen.jpg)',
    'url(images/display/miniature-fourteen.jpg)',
    'url(images/display/miniature-fifteen.jpg)',
    'url(images/display/miniature-sixteen.jpg)'];

let counter = 0;

setInterval(() => {
  if (counter === arrayImages.length) {
    count(counter, ...miniature);
  }

  if (counter < arrayImages.length) {
    if (counter >= 1) {
      count(counter, ...miniature);
    }
    miniature[counter].style.borderStyle = 'solid';
    display.style.backgroundImage = arrayImages[counter];
    counter++;

  } else {
    counter = 0;
  }

}, 1000);

function count(number, ...picture) {
  number--;
  picture[number].style.borderStyle = 'none';
  number++;
}




