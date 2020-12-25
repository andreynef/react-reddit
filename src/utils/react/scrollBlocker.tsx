//https://stackoverflow.com/questions/6411282/how-to-lock-scrolling-of-a-web-page-temporarily
import React from 'react';

export function enableBodyScroll() {
  if (document.readyState === 'complete') {
    document.body.style.position = '';
    document.body.style.overflowY = '';
    // document.body.style.overflowY = 'unset';

    if (document.body.style.marginTop) {
      const scrollTop = -parseInt(document.body.style.marginTop, 10);
      document.body.style.marginTop = '';
      window.scrollTo(window.pageXOffset, scrollTop);
    }
  } else {
    window.addEventListener('load', enableBodyScroll);
  }
}

export function disableBodyScroll({ savePosition = false } = {}) {
  if (document.readyState === 'complete') {
    if (document.body.scrollHeight > window.innerHeight) {
      if (savePosition) document.body.style.marginTop = `-${window.pageYOffset}px`;
      document.body.style.position = 'fixed';
      document.body.style.overflowY = 'scroll';
      // document.body.style.overflowY = 'hidden';
    }
  } else {
    window.addEventListener('load', () => disableBodyScroll({ savePosition }));
  }
}

export function hiddenBodyScroll() {
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
}

export function visibleBodyScroll() {
  document.getElementsByTagName('body')[0].style.overflowY = 'unset' // или visible - default for the css property
}

