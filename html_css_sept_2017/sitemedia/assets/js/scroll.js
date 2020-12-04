function scroll() {
    var i, aLiens = document.querySelectorAll('a[href*="#"]');
    for(i=0, len = aLiens.length; i<len; i++) {
        aLiens[i].onclick = gererClicks
    };
}

function gererClicks() {
    var target;
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        target = this.getAttribute("href").slice(1);
        if (target.length) {
            scrollTo(document.getElementById(target).offsetTop, 1200);
            return false;
        }
    }
};

function scrollTo(element, duration) {
    var t, e = document.documentElement;
    if(e.scrollTop===0){
        t = e.scrollTop;
        ++e.scrollTop;
        e = t+1===e.scrollTop-- ? e : document.body;
    }
    scrollToC(e, e.scrollTop, element, duration);
}

function scrollToC(element, from, to, duration) {
    if (duration < 0) return;
    if(typeof from === "object")from=from.offsetTop;
    if(typeof to === "object")to=to.offsetTop;
    scrollToX(element, from, to, 0, 1/duration, 10, easeOutCuaic);
}

function scrollToX(element, x1, x2, t, v, step, operacion) {
    if (t < 0 || t > 1 || v <= 0) return;
    element.scrollTop = x1 - (x1-x2)*operacion(t);
    t += v * step;
    setTimeout(function() {
        scrollToX(element, x1, x2, t, v, step, operacion);
    }, step);
}

function easeOutCuaic(t){
    t--;
    return t*t*t+1;
}