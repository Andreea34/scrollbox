// Scrollbox - https://github.com/Andreea34/scrollbox
// Version - 1.0.2
// Licensed under the MIT License - https://opensource.org/licenses/MIT
// Copyright (c) 2022 Andreea Popescu - http://andreeapopescu.com

const scrollbox = function (target) {

  // target
  if (target === undefined || target === null) { target = '.scrollbox' }

  // select
  const page = document.querySelector('body')
  const scrolls = document.querySelectorAll(target)

  if (scrolls !== undefined && scrolls !== null) {

    // select
    let winHight = parseInt(window.innerHeight)
    let pageHeight = Math.max( page.clientHeight, page.scrollHeight, page.offsetHeight )
    let pageMargin = parseInt(getStyle(page, 'marginTop')) + parseInt(getStyle(page, 'marginBottom'))
    if (pageMargin !== null || isNaN(pageMargin)) { pageHeight = pageHeight + pageMargin }
    let pagePadding = parseInt(getStyle(page, 'paddingTop')) + parseInt(getStyle(page, 'paddingBottom'))
    if (pagePadding !== null || isNaN(pagePadding)) { pageHeight = pageHeight + pagePadding }
    let currentHeight
    let minHeight
    let maxHeight
    let newHeights = []

    scrolls.forEach((scroll, index) => {

      // get
      currentHeight = parseInt(scroll.clientHeight)
      minHeight = parseInt(getStyle(scroll, 'minHeight'))
      maxHeight = parseInt(getStyle(scroll, 'maxHeight'))

      // calc
      if (pageHeight > winHight) { newHeight = currentHeight - (pageHeight - winHight) }
      else if (pageHeight < winHight) { newHeight = currentHeight + (winHight - pageHeight) }

      // check
      if (minHeight !== NaN) { if (newHeight < minHeight) { newHeight = minHeight; } }
      if (maxHeight !== NaN) { if (newHeight > maxHeight) { newHeight = maxHeight; } }
      newHeights.push(newHeight)

      //set
      scroll.style.height = `${newHeights[ index ]}px`

    })

  }
}

// helper
const getStyle = function (target, style) {
  return window.getComputedStyle(target)[style]
}

// initiate
window.addEventListener('load', scrollbox() )

// resize
let throttleTimer = null  // wait for resize event to "finish"
let throttleResize = true // ignore resize event bubbling
window.addEventListener('resize', e => {
  if (throttleResize === true) {
    throttleResize = false
    clearTimeout(throttleTimer)
    throttleTimer = setTimeout(function() {
      scrollbox()
      throttleResize = true;
    }, 300)
  }
})
