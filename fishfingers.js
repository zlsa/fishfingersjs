
// FISHFINGERS.JS

// SIMPLER ALERT() WITH LESS KEYSTROKES

// CC0

function alrt(message) {
  window.alert(message + '\nBrought to you by fishfingers.js, the premier keystroke-saving JS library');
}

var ff = {};

ff.alert = function(message) {
  alrt(message + '\nNOTE: ff.alert() is DEPRECATED! Do not use it in future projects!');
}

// make sure users are using jquery

if(!window.jQuery) {
  alrt('fishfingers.js requires jQuery to be included first!');
}
