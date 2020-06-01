'use strict';

const displayOne = document.querySelector('.display-one')
const miniature = document.getElementsByClassName('miniature');
console.log(miniature);

const arrayImages =
  [
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

function toDisplay() {
  if (counter === arrayImages.length) {
    count(counter, ...miniature);
  }

  if (counter < arrayImages.length) {
    if (counter >= 1) {
      count(counter, ...miniature);
    }
    miniature[counter].style.borderStyle = 'solid';
    displayOne.style.backgroundImage = arrayImages[counter];
    counter++;

  } else {
    counter = 0;
  }
}

let interval = setInterval(toDisplay, 1000);
let flag = true;


const stop = document.getElementById('stop');
stop.addEventListener('click', () => {
  if (flag) {
    clearInterval(interval);
    flag = false;
  } else {
    interval = setInterval(toDisplay, 1000);
    flag = true;
  }

});

function count(number, ...picture) {
  number--;
  picture[number].style.borderStyle = 'none';
  number++;
}




