// Scrollbox - https://github.com/Andreea34/scrollbox
// Version - 1.0.0
// Licensed under the MIT License - https://opensource.org/licenses/MIT
// Copyright (c) 2022 Andreea Popescu - http://andreeapopescu.com

const scrollbox = function (target) {

  if (target === undefined || target === null) { target = '.scrollbox'; }

  // select
  const page = document.querySelector('body');
  const scrolls = document.querySelectorAll(target);

  if (scrolls !== undefined && scrolls !== null) {

    // get
    let winHight = parseInt(window.innerHeight);
    let pageHeight = parseInt(page.clientHeight);
    let currentHeight;
    let minHeight;
    let maxHeight;
    let newHeights = [];

    scrolls.forEach(scroll => {

      // get
      currentHeight = parseInt(scroll.clientHeight);
      minHeight = parseInt(window.getComputedStyle(scroll).minHeight);
      maxHeight = parseInt(window.getComputedStyle(scroll).maxHeight);

      //calc
      if (pageHeight > winHight) { newHeight = currentHeight - (pageHeight - winHight); }
      else if (pageHeight < winHight) { newHeight = currentHeight + (winHight - pageHeight); }

      // check
      if (minHeight !== NaN) { if (newHeight < minHeight) { newHeight = minHeight; } }
      if (maxHeight !== NaN) { if (newHeight > maxHeight) { newHeight = maxHeight; } }
      newHeights.push(newHeight);

    });

    // set
    scrolls.forEach((scroll, index) => {
      scroll.style.height = `${newHeights[ index ]}px`;
      scroll.style.border = `red !important`;
    });

  }
}

window.addEventListener('load', function (e) { scrollbox(); });

let throttleTimer = null;  // wait for resize event to "finish"
let throttleResize = true; // ignore resize event bubbling
window.addEventListener('resize', function(e){
  if (throttleResize === true) {
    throttleResize = false;
    clearTimeout(throttleTimer);
    throttleTimer = setTimeout(function() {
      scrollbox();
      throttleResize = true;
    }, 300);
  }
});