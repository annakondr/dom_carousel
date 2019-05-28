'use strict';

const leftArrow = document.querySelector('.previous');
const rightArrow = document.querySelector('.next');
const gallery = document.querySelector('.galery')
const count = 420;
leftArrow.classList.add('disabled')
rightArrow.addEventListener('click', function(event){
    gallery.scrollLeft += count;
    if (gallery.scrollLeft >= 980) {
        gallery.scrollLeft = 980;
        rightArrow.classList.add('disabled');
    } else {
        leftArrow.classList.remove('disabled');
    }
    console.log(gallery.scrollLeft)
});

leftArrow.addEventListener('click', function(event) {
    gallery.scrollLeft -= count;
    if (gallery.scrollLeft <= 0) {
        gallery.scrollLeft = 0;
        leftArrow.classList.add('disabled');
    } else {
        rightArrow.classList.remove('disabled');
    }
    console.log(gallery.scrollLeft)
});
console.log(gallery.scrollLeft)
