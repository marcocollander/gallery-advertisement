'use strict';

const displayOne = document.querySelector('.display-one')
const miniature = document.getElementsByClassName('miniature');
console.log(miniature);

const arrayImagesOne =
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
    'url(images/display-two/picturee-nine.jpg)',
    'url(images/display-two/picture-ten.jpg)',
    'url(images/display-two/picture-eleven.jpg)',
    'url(images/display-two/picture-twelve.jpg)',
    'url(images/display-two/picture-threeteen.jpg)',
    'url(images/display-two/picture-fourteen.jpg)',
    'url(images/display-two/picture-fifteen.jpg)',
    'url(images/display-two/picture-sixteen.jpg)'];

let counter = 0;

function toDisplay(...images) {
  if (counter === images.length) {
    count(counter, ...miniature);
  }

  if (counter < images.length) {
    if (counter >= 1) {
      count(counter, ...miniature);
    }
    miniature[counter].style.borderStyle = 'solid';
    displayOne.style.backgroundImage = images[counter];
    counter++;

  } else {
    counter = 0;
  }
}

let interval = setInterval(() => {
  toDisplay(...arrayImagesOne);
}, 1000);
let flag = true;


const stopOne = document.getElementById('stop-one');
stopOne.addEventListener('click', () => {
  if (flag) {
    clearInterval(interval);
    flag = false;
  } else {
    interval = setInterval(() => {
      toDisplay(...arrayImagesOne);
    }, 1000);
    flag = true;
  }

});

function count(number, ...picture) {
  number--;
  picture[number].style.borderStyle = 'none';
  number++;
}




