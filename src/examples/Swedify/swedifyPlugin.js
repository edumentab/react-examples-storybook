// Pretend that this is a RIDICULOUSLY complex jQuery plugin! :D

import $ from 'jquery'

export function registerSwedify() {
  $.fn.swedify = function() {
    return $(this).css({
      border: '5px solid blue',
      backgroundColor: 'yellow',
      padding: 5,
    })
  }
}
