const display = document.querySelector('.display');
const miniature = document.getElementsByClassName('miniature');
console.log(display);
//display.style.backgroundImage = 'url(images/display/miniature-two.jpg)';
const arrayImages =
  ['url(images/display/miniature-one.jpg)',
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
let flag = true;
setInterval(() => {
  if (counter < arrayImages.length) {
    display.style.backgroundImage = arrayImages[counter];
    miniature[counter].classList.toggle('display-frame');
  } else {
    counter = 1;
  }

  counter++;
  //miniature[counter - 1].classList.toggle('frame');

  console.log(counter);

}, 2000);




