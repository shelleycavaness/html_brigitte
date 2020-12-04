// la function app est une IIFE =>
// Immediatly Invoqued Function Expression 

var log = function log(jcvd) {
    "use strict";
    window.console.log(jcvd);
};
           
var app = (function app() {
    "use strict";
    
    window.onload = function start() {
        log('ready');
        var jerem = document.querySelector('[data-jerem="paschauve"]');
        scroll();
        log(jerem);
    };
    
}());