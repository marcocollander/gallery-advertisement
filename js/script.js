'use strict';

const displayOne = document.querySelector('.display-one');
const displayTwo = document.querySelector('.display-two');
const images = document.querySelectorAll('.miniature.image');
const pictures = document.querySelectorAll('.miniature.picture');
console.log(images);
console.log(pictures);
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
    'url(images/display-two/picture-nine.jpg)',
    'url(images/display-two/picture-ten.jpg)',
    'url(images/display-two/picture-eleven.jpg)',
    'url(images/display-two/picture-twelve.jpg)',
    'url(images/display-two/picture-threeteen.jpg)',
    'url(images/display-two/picture-fourteen.jpg)',
    'url(images/display-two/picture-fifteen.jpg)',
    'url(images/display-two/picture-sixteen.jpg)'];

let counter = 0;
let miniatures = images;

function toDisplay(display, ...images) {
  if (counter === images.length) {
    count(counter, ...miniatures);
  }

  if (counter < images.length) {
    if (counter >= 1) {
      count(counter, ...miniatures);
    }
    miniatures[counter].style.borderStyle = 'solid';
    display.style.backgroundImage = images[counter];
    counter++;

  } else {
    counter = 0;
  }
}

let interval = setInterval(() => {
  toDisplay(displayOne, ...arrayImagesOne);
}, 1000);

let flag = true;
const stopOne = document.getElementById('stop-one');
stopOne.addEventListener('click', () => {
  if (flag) {
    clearInterval(interval);
    flag = false;
  } else {
    interval = setInterval(() => {
      toDisplay(displayOne, ...arrayImagesOne);
    }, 1000);
    flag = true;
  }

});

miniatures = pictures;
let intervalTwo = setInterval(() => {
  toDisplay(displayTwo, ...arrayImagesTwo);
}, 1000);

let flagTwo = true;

const stopTwo = document.getElementById('stop-two');
stopTwo.addEventListener('click', ()=>{
  if (flag) {
    clearInterval(intervalTwo);
    flag = false;
  } else {
    intervalTwo = setInterval(() => {
      toDisplay(displayTwo, ...arrayImagesTwo);
    }, 1000);
    flag = true;
  }
});

function count(number, ...picture) {
  number--;
  picture[number].style.borderStyle = 'none';
  number++;
}




